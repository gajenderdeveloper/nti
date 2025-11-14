"use client"

import React, { useState } from 'react'

const MOCK_PRODUCTS = {
    'rollers': [
        { id: 'r1', name: 'Roller 1', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Roller+1' },
        { id: 'r2', name: 'Roller 2', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Roller+2' },
    ],
    'cones': [
        { id: 'c1', name: 'OWN Cone', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=OWN+Cone' },
    ],
    'gears': [
        { id: 'g1', name: 'Gear 1', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Gear+1' },
        { id: 'g2', name: 'Sprocket 1', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Sprocket+1' },
    ],
    'plastic-strips': [
        { id: 'ps1', name: 'Plastic Strip', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Plastic+Strip' },
    ],
    'sub-reflectors': [
        { id: 'sr1', name: 'Sub Reflector', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Sub+Reflector' },
    ],
    'pipes': [
        { id: 'p1', name: 'Pipe 1', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Pipe+1' },
    ],
    'screws': [
        { id: 's1', name: 'Screw 1', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Screw+1' },
    ],
    'slotted-rings': [
        { id: 'sl1', name: 'Slotted Ring', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Slotted+Ring' },
    ],
    'miscellaneous': [
        { id: 'm1', name: 'Misc. Part', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Misc.+Part' },
    ],
}
const getProductsByCategory = (category) => {
    return MOCK_PRODUCTS[category] || []
}

const featured = [
    {
        slug: 'rollers',
        title: 'Rollers',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'cones',
        title: 'Cones',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'gears-pinions-sprockets',
        title: 'Pinions, Gears & Sprockets',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'plastic-strips',
        title: 'Plastic Strips',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'sub-reflectors',
        title: 'Sub Reflectors / Splash Plates',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'pipes',
        title: 'Pipes',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'screws',
        title: 'Screws',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'slotted-rings',
        title: 'Slotted Rings',
        linkText: 'View All Types',
        kind: 'category',
    },
    {
        slug: 'miscellaneous',
        title: 'Miscellaneous',
        linkText: 'View All Types',
        kind: 'category',
    },
]

export default function Products() {
    const [expandedSlug, setExpandedSlug] = useState < string | null > (null)
    const [galleryItems, setGalleryItems] = useState < any[] > ([])
    const [selectedProduct, setSelectedProduct] = useState < any | null > (null)

    function openGalleryFor(feature) {
        if (expandedSlug === feature.slug) {
            closeGallery()
            return
        }

        let category: string | null = null
        let subFilter: string | null = null

        if (feature.slug.startsWith('cones')) {
            category = 'cones'
            if (feature.href && feature.href.includes('sub=with')) subFilter = 'With Conductive Paint'
            if (feature.href && feature.href.includes('sub=without')) subFilter = 'Without Conductive Paint'
        } else if (feature.slug.includes('screw')) {
            category = 'screws'
        } else if (feature.slug.includes('roller')) {
            category = 'rollers'
        } else if (feature.slug.includes('gear')) {
            category = 'gears'
        } else if (feature.slug.includes('plastic-strips')) {
            category = 'plastic-strips'
        } else if (feature.slug.includes('sub-reflectors')) {
            category = 'sub-reflectors'
        } else if (feature.slug.includes('pipes')) {
            category = 'pipes'
        } else if (feature.slug.includes('slotted-rings')) {
            category = 'slotted-rings'
        } else if (feature.slug.includes('miscellaneous')) {
            category = 'miscellaneous'
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

    const Link = ({ href, children, ...props }) => <a href={href} {...props}>{children}</a>;

    return (
        <section id="products" className="py-16 bg-[#e6f0fa] font-sans">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#13395d]">Product Catalogue</h2>
                    <p className="mt-3 text-[#13395d] text-sm lg:text-lg">Browse our manufacturing capabilities. Click any card or the + to open a gallery for that product group.</p>
                </div>

                <div className="mt-10">
                    <div className="bg-slate-900 border border-slate-900 rounded-md">
                        {featured.map((p, idx) => (
                            <div key={p.slug}>
                                <div className={`flex items-center justify-between px-6 py-4 border-b border-b-slate-700`}>
                                    <button onClick={() => openGalleryFor(p)} className="text-left w-full flex items-center gap-4">
                                        <span className="font-semibold text-white">{p.title}</span>
                                    </button>
                                    <button aria-label={`Expand ${p.title}`} onClick={() => openGalleryFor(p)} className="ml-4 text-2xl text-white font-bold select-none">{expandedSlug === p.slug ? '−' : '+'}</button>
                                </div>

                                {expandedSlug === p.slug && (
                                    <div className="px-6 py-4 bg-[#e6f0fa] border-b border-b-slate-700">
                                        {galleryItems.length > 0 ? (
                                            <div className="overflow-x-auto -mx-4 px-4">
                                                <div className="flex gap-4 w-max">
                                                    {galleryItems.map((g) => (
                                                        <Link key={g.id} href={`/products/${g.id}`} className="block min-w-[160px] max-w-[200px] text-left group">
                                                            <div className="bg-slate-50 h-36 flex items-center justify-center border rounded overflow-hidden group-hover:shadow-lg transition-shadow">
                                                                <img src={g.imageUrl} alt={g.name} className="object-contain h-32" />
                                                            </div>
                                                            <p className="text-sm font-semibold text-slate-700 mt-2 truncate">{g.name}</p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-slate-600 text-center">No products found in this category.</p>
                                        )}


                                        {selectedProduct && (
                                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="md:col-span-2 bg-white border rounded overflow-hidden p-4">
                                                    <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-64 object-contain bg-gray-50" />
                                                </div>
                                                <div className="p-4">
                                                    <h4 className="text-2xl font-bold text-nti-blue mb-2">{selectedProduct.name}</h4>
                                                    <p className="text-gray-800 mb-4">{selectedProduct.description}</p>
                                                    <Link href={`/product/${selectedProduct.id}`} className="inline-block bg-nti-blue text-white px-4 py-2 rounded">View Details</Link>
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
