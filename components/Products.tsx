import React from 'react'
import Link from 'next/link'

const products = [
    {
        slug: 'cones',
        title: 'Cones',
        desc: 'We manufacture 15 types of various cone designs for industrial and telecommunication applications.',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'custom-screws',
        title: 'Custom Screws',
        desc: 'Precision threads and custom screws. Available in 10 types of materials and sizes to your specs.',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'pipes-rollers',
        title: 'Pipes & Rollers',
        desc: 'Over 15 types of high-durability pipes and rollers designed for material handling and specialty applications.',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'gears',
        title: 'Gears',
        desc: 'High-precision gears available in 6 standard types. We also machine fully custom gears to your drawings.',
        linkText: 'View All Types',
        kind: 'category',
    },

    {
        slug: 'cable-press-rollers',
        title: 'Cable Press Rollers',
        desc: 'Custom-machined press rollers for cable manufacturing. Made to order for your specific machinery.',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'discharge-rollers',
        title: 'Discharge Rollers',
        desc: 'High-performance discharge rollers. Custom-machined to your exact specifications and tolerances.',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'pinions',
        title: 'Pinions',
        desc: 'Precision-engineered pinions to pair with your gear systems. Custom-built from your specs.',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'sprockets',
        title: 'Sprockets',
        desc: 'Durable, custom-machined sprockets for all types of industrial chains and machinery.',
        linkText: 'Learn More',
        kind: 'custom',
    },

    {
        slug: 'construction-pads',
        title: 'Construction Pads',
        desc: 'Heavy-duty, wear-resistant pads for construction equipment. Manufactured to your requirements.',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'antenna-telecom-parts',
        title: 'Antenna & Telecom Parts',
        desc: 'Rings, reflectors, and assembly components for the telecommunication industry.',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'tailor-made-components',
        title: 'Tailor-Made Components',
        desc: 'Our specialty. We build any precision component from your drawings, samples, or specifications.',
        linkText: 'Request a Quote',
        kind: 'custom',
    },
]

export default function Products() {
    return (
        <section id="products" className="py-8 bg-[#e6f0fa]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#13395d]">Product Catalogue</h2>
                    <p className="mt-3 text-[#13395d] text-sm lg:text-lg">Browse our manufacturing capabilities. Click any card to see details or a gallery for that product category.</p>
                </div>

                {/* Homepage: show only the first 4 products (no scroller) and a View more button */}
                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.slice(0, 4).map((p) => (
                            <Link key={p.slug} href={`/products/${p.slug}`} className="block">
                                <article className="h-full bg-slate-900 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                                    <div className="h-40 bg-slate-50 flex items-center justify-center">
                                        <img src={`/product-images/${p.slug}/cones.png`} alt={`${p.title} image`} className="object-contain h-32" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                                        <p className="mt-2 text-sm text-white">{p.desc}</p>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <span className="text-sm text-white font-medium">{p.linkText} →</span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <Link href="/products" className="inline-block bg-slate-900 hover:bg-[#13395d] text-white px-5 py-3 rounded-md transition-colors font-medium">
                            View more products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
