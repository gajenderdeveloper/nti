"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
    images?: string[]
    title?: string
    desc?: string
    btnText?: string
    showOverlay?: boolean
    onButtonClick?: () => void
    intervalMs?: number
}

export default function TiltCard({
    images,
    title = 'Modern Packaging',
    desc = '3D-tilt interactive card to present your work with depth and motion.',
    btnText = 'About',
    showOverlay = true,
    onButtonClick,
    intervalMs = 3500,
}: Props) {
    const ref = useRef<HTMLDivElement | null>(null)
    const router = useRouter()
    const [index, setIndex] = useState(0)
    const [slides, setSlides] = useState<string[] | null>(
        images && images.length > 0 ? images : null
    )

    useEffect(() => {
        if (slides && slides.length > 0) return
        let cancelled = false
            ; (async () => {
                try {
                    const res = await fetch('/api/hero-section')
                    if (!res.ok) return
                    const data = await res.json()
                    if (!cancelled && Array.isArray(data) && data.length > 0) {
                        setSlides(data)
                        const idx = data.findIndex((s: string) => s.toLowerCase().endsWith('slide0.jpg'))
                        if (idx >= 0) setIndex(idx)
                    }
                } catch (e) {
                }
            })()
        return () => {
            cancelled = true
        }
    }, [slides])

    useEffect(() => {
        const active = slides && slides.length > 0 ? slides : images
        const length = active ? active.length : 0
        if (!length) return
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % length)
        }, intervalMs)
        return () => clearInterval(id)
    }, [images, slides, intervalMs])

    useEffect(() => {
        if (images && images.length > 0) {
            const idx = images.findIndex((s) => s.toLowerCase().endsWith('slide0.jpg'))
            if (idx >= 0) setIndex(idx)
        }
    }, [images])

    useEffect(() => {
        let script: HTMLScriptElement | null = null
        const el = ref.current
        if (!el) return

        const initTilt = () => {
            if (window.VanillaTilt && el) {
                window.VanillaTilt.init(el, {
                    max: 20,
                    speed: 400,
                    glare: true,
                    'max-glare': 0.25,
                    scale: 1.03,
                })
            }
        }

        if ((window as any).VanillaTilt) {
            initTilt()
        } else {
            script = document.createElement('script')
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js'
            script.async = true
            script.onload = initTilt
            document.body.appendChild(script)
        }

        return () => {
            try {
                if (el && el.vanillaTilt) el.vanillaTilt.destroy()
            } catch (e) {
            }
            if (script && script.parentNode) script.parentNode.removeChild(script)
        }
    }, [])

    const active = slides && slides.length > 0 ? slides : images || ['']
    const prev = () => setIndex((i) => (i - 1 + active.length) % active.length)
    const next = () => setIndex((i) => (i + 1) % active.length)

    return (
        <div ref={ref} className="card3d relative rounded-lg overflow-hidden">
            <div className="card-img absolute inset-0">
                <img src={active[index]} alt={`slide-${index}`} className="w-full h-full object-cover" />
            </div>

            {showOverlay && (
                <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm opacity-90">{desc}</p>
                    <div className="mt-3">
                        <button
                            className="bg-white/10 backdrop-blur px-3 py-1 rounded"
                            onClick={() => {
                                if (onButtonClick) return onButtonClick()
                                try {
                                    router.push('/about')
                                } catch (e) { }
                            }}
                        >
                            {btnText}
                        </button>
                    </div>
                </div>
            )}

            <button aria-label="previous" onClick={prev} className="side-btn left-2 md:left-4">{'<'}</button>
            <button aria-label="next" onClick={next} className="side-btn right-2 md:right-4">{'>'}</button>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
                {(active || []).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
