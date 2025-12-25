"use client"
import { useState } from 'react'

export default function Hero() {
    const slides = [
        {
            src: 'hero-section/slide1.webp',
            alt: 'NTI precision engineering - slide 1',
            title: 'Precision Engineering for a Smarter Tomorrow',
            text: 'NewTech Industries (NTI) is a precision machining enterprise specializing in the manufacture of precision engineering mechanical components for Original Equipment Manufacturers (OEMs) across diverse industrial sectors. Leveraging advanced CNC technology, robust process controls, and stringent quality assurance protocols, NTI delivers engineered parts that meet exacting specifications for performance, durability, and dimensional accuracy.'
        },
        {
            src: 'hero-section/slide2.webp',
            alt: 'NTI precision engineering - slide 2',
            title: 'Precision Engineering for a Smarter Tomorrow',
            text: 'NTI partners with OEMs in automotive, aerospace, industrial automation, telecom and energy domains, offering scalable solutions from design validation to full-scale production. Our commitment to precision, reliability, and continuous improvement positions us as a trusted supplier in the manufacturing value chain'
        }
    ]

    const [index, setIndex] = useState(0)

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
    const next = () => setIndex((i) => (i + 1) % slides.length)

    const slide = slides[index]

    return (
        <section className="py-6 lg:pt-8 lg:pb-16 bg-[#e6f0fa] font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden relative md:h-[520px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch h-full">
                        <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center h-auto md:h-full order-2 md:order-1">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#13395d]">{slide.title}</h1>
                            <p className="mt-4 lg:mt-6 text-sm md:text-base text-[#13395d] font-semibold">{slide.text}</p>
                        </div>

                        <div className="w-full h-64 sm:h-80 md:h-full order-1 md:order-2 relative">
                            <button aria-label="Previous slide" onClick={prev} className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-[#13395d] rounded-full p-1.5 sm:p-2 shadow-md transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button aria-label="Next slide" onClick={next} className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-[#13395d] rounded-full p-1.5 sm:p-2 shadow-md transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>


                            <img
                                key={slide.src}
                                src={slide.src}
                                alt={slide.alt}
                                className="object-cover w-full h-full"
                                fetchPriority={index === 0 ? 'high' : 'auto'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

