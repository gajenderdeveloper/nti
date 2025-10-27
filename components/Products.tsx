"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { products as allProducts, getProductsByCategory } from '../data/products'

// Featured cards shown on the homepage (first row)
const featured = [
    {
        slug: 'cones-with',
        href: '/products/cones?sub=with',
        image: '/product-images/cones/cone-with.png',
        title: 'OWN Cones — With Conductive Paints',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'cones-without',
        href: '/products/cones?sub=without',
        image: '/product-images/cones/cone-without.png',
        title: 'OWN Cones — Without Conductive Paints',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'custom-screws',
        title: 'Custom Screws',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'rollers',
        title: 'Rollers',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'gears',
        title: 'Gears',
        linkText: 'View All Types',
        kind: 'category',
    },

    {
        slug: 'cable-press-rollers',
        title: 'Cable Press Rollers',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'discharge-rollers',
        title: 'Discharge Rollers',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'pinions',
        title: 'Pinions',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'sprockets',
        title: 'Sprockets',
        linkText: 'Learn More',
        kind: 'custom',
    },

    {
        slug: 'construction-pads',
        title: 'Construction Pads',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'antenna-telecom-parts',
        title: 'Antenna & Telecom Parts',
        linkText: 'Learn More',
        kind: 'custom',
    },
    {
        slug: 'tailor-made-components',
        title: 'Tailor-Made Components',
        linkText: 'Request a Quote',
        kind: 'custom',
    },
]

export default function Products() {
    const [expandedSlug, setExpandedSlug] = useState<string | null>(null)
    const [galleryItems, setGalleryItems] = useState<any[]>([])
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null)

    function openGalleryFor(feature) {
        // If already open for this feature, close it (toggle behavior)
        if (expandedSlug === feature.slug) {
            closeGallery()
            return
        }

        // Determine category from featured slug/href
        let category: string | null = null
        let subFilter: string | null = null
        if (feature.slug.startsWith('cones') || (feature.href && feature.href.includes('/products/cones'))) {
            category = 'cones'
            // detect sub query in href
            if (feature.href && feature.href.includes('sub=with')) subFilter = 'With Conductive Paint'
            if (feature.href && feature.href.includes('sub=without')) subFilter = 'Without Conductive Paint'
        } else if (feature.slug.includes('screw')) {
            category = 'screws'
        } else if (feature.slug.includes('roller')) {
            category = 'rollers'
        } else if (feature.slug.includes('gear')) {
            category = 'gears'
        }

        if (!category) return

        const items = getProductsByCategory(category)
        const filtered = subFilter ? items.filter((i: any) => i.subCategory === subFilter) : items
        setGalleryItems(filtered)
        setSelectedProduct(null)
        setExpandedSlug(feature.slug)
    }

    function closeGallery() {
        setExpandedSlug(null)
        setGalleryItems([])
        setSelectedProduct(null)
    }

    return (
        <section id="products" className="py-8 bg-[#e6f0fa]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#13395d]">Product Catalogue</h2>
                    <p className="mt-3 text-[#13395d] text-sm lg:text-lg">Browse our manufacturing capabilities. Click any card or the + to open a gallery for that product group.</p>
                </div>

                {/* Top list: show 5 featured lines with + */}
                <div className="mt-10">
                    <div className="bg-slate-900 border border-slate-900 rounded-md">
                        {featured.slice(0, 5).map((p, idx) => (
                            <div key={p.slug}>
                                <div className={`flex items-center justify-between px-6 py-4 border-b ${idx === 0 ? '' : ''}`}>
                                    <button onClick={() => openGalleryFor(p)} className="text-left w-full flex items-center gap-4">
                                        <span className="font-semibold text-white">{p.title}</span>
                                        {/* description removed per request */}
                                    </button>
                                    <button aria-label={`Expand ${p.title}`} onClick={() => openGalleryFor(p)} className="ml-4 text-2xl text-white font-bold select-none">{expandedSlug === p.slug ? '−' : '+'}</button>
                                </div>

                                {/* Inline gallery for this line */}
                                {expandedSlug === p.slug && (
                                    <div className="px-6 py-2 bg-[#e6f0fa] border-b">
                                        <div className="overflow-x-auto -mx-4 px-4">
                                            <div className="flex gap-4 w-max">
                                                {galleryItems.map((g) => (
                                                    <Link key={g.id} href={`/products/${g.id}`} className="block min-w-[160px] max-w-[200px] text-left">
                                                        <div className="bg-slate-50 h-36 flex items-center justify-center border rounded overflow-hidden">
                                                            <img src={g.imageUrl} alt={g.name} className="object-contain h-32" />
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Selected product details (inline) */}
                                        {selectedProduct && (
                                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="md:col-span-2 bg-white border rounded overflow-hidden p-4">
                                                    <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-64 object-contain bg-gray-50" />
                                                </div>
                                                <div className="p-4">
                                                    <h4 className="text-2xl font-bold text-nti-blue mb-2">{selectedProduct.name}</h4>
                                                    <p className="text-gray-800 mb-4">{selectedProduct.description}</p>
                                                    <Link href={`/products/${selectedProduct.id}`} className="inline-block bg-nti-blue text-white px-4 py-2 rounded">View Details</Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
