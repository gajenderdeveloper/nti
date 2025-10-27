import fs from 'fs'
import path from 'path'
import React from 'react'
import Link from 'next/link'

type Props = { params: { slug: string } }

const productMeta: Record<string, { title: string; kind?: 'category' | 'custom' }> = {
    'cones': { title: 'Cones', kind: 'category' },
    'custom-screws': { title: 'Custom Screws', kind: 'category' },
    'rollers': { title: 'Rollers', kind: 'category' },
    'gears': { title: 'Gears', kind: 'category' },
    'cable-press-rollers': { title: 'Cable Press Rollers', kind: 'custom' },
    'discharge-rollers': { title: 'Discharge Rollers', kind: 'custom' },
    'pinions': { title: 'Pinions', kind: 'custom' },
    'sprockets': { title: 'Sprockets', kind: 'custom' },
    'construction-pads': { title: 'Construction Pads', kind: 'custom' },
    'antenna-telecom-parts': { title: 'Antenna & Telecom Parts', kind: 'custom' },
    'tailor-made-components': { title: 'Tailor-Made Components', kind: 'custom' },
}

export default function Page({ params }: Props) {
    const { slug } = params
    const meta = productMeta[slug] ?? { title: slug.replace(/[-_]/g, ' '), kind: 'custom' }

    const dir = path.join(process.cwd(), 'public', 'product-images', slug)
    let images: string[] = []
    try {
        const files = fs.readdirSync(dir)
        images = files.filter((f) => /\.(png|jpe?g|webp|svg)$/i.test(f)).map((f) => `/product-images/${slug}/${f}`)
    } catch (e) {
        images = [`/product-images/${slug}/placeholder.svg`]
    }

    return (
        <main className="py-16 bg-[#e6f0fa]">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{meta.title}</h1>
                    <Link href="/" className="text-sm text-[#13395d]">← Back to home</Link>
                </div>

                <div className="mt-6 text-slate-700">
                    {slug === 'construction-pads' ? (
                        <div>
                            <p>
                                We manufacture high-durability construction pads for heavy equipment. All our pads are custom-made to your specific
                                requirements. Please contact us with your drawings or specifications for a quote.
                            </p>
                            <div className="mt-6">
                                <a href="mailto:sales@newtechindustries.example" className="inline-block px-4 py-2 bg-[#13395d] text-white rounded">Request a Quote</a>
                            </div>
                        </div>
                    ) : meta.kind === 'custom' ? (
                        <div>
                            <p className="mb-4">{meta.title} — custom manufactured per your specifications. Contact us to request a quote or send drawings.</p>
                            <div className="mt-6">
                                <a href="mailto:sales@newtechindustries.example" className="inline-block px-4 py-2 bg-[#13395d] text-white rounded">Request a Quote</a>
                            </div>
                        </div>
                    ) : (
                        <p className="mb-4">{meta.title} — gallery showing available types for this category.</p>
                    )}
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src) => (
                        <div key={src} className="bg-white border rounded overflow-hidden p-4 flex items-center justify-center h-40">
                            <img src={src} alt={meta.title} className="object-contain max-h-full" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
