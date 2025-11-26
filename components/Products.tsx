"use client"

import React, { useState } from 'react'

const MOCK_PRODUCTS = {
    'rollers': [
        { id: 'r1', slug: 'cable-roller', name: 'Cable Press Roller', imageUrl: '/products/roller/cable_roller.jpg', category: 'rollers' },
        { id: 'r2', slug: 'discharge-roller', name: 'Discharge Roller', imageUrl: '/products/roller/discharge_roller.jpg', category: 'rollers' },
        { id: 'r3', slug: 'misc-roller', name: 'Misc Roller', imageUrl: '/products/roller/misc_roller.jpg', category: 'rollers' },
    ],
    'OWN cones': [
        { id: 'c1', slug: 'colorless-cone-1', name: 'OWN Cones without Coating 1', imageUrl: '/products/cones/colorless_cones_1.jpg', category: 'OWN cones' },
        { id: 'c2', slug: 'colorless-cone-2', name: 'OWN Cones without Coating 2', imageUrl: '/products/cones/colorless_cones_2.jpg', category: 'OWN cones' },
        { id: 'c3', slug: 'colorless-cone-3', name: 'OWN Cones without Coating 3', imageUrl: '/products/cones/colorless_cones_3.jpg', category: 'OWN cones' },
        { id: 'c4', slug: 'colorless-cone-4', name: 'OWN Cones without Coating 4', imageUrl: '/products/cones/colorless_cones_4.jpg', category: 'OWN cones' },
        { id: 'c5', slug: 'colorless-cone-5', name: 'OWN Cones without Coating 5', imageUrl: '/products/cones/colorless_cones_5.jpg', category: 'OWN cones' },
        { id: 'c6', slug: 'colorless-cone-6', name: 'OWN Cones without Coating 6', imageUrl: '/products/cones/colorless_cones_6.jpg', category: 'OWN cones' },
        { id: 'c7', slug: 'own-cone-1', name: 'OWN Cones with Conductive Coating 1', imageUrl: '/products/cones/own_cones_1.jpg', category: 'OWN cones' },
        { id: 'c8', slug: 'own-cone-2', name: 'OWN Cones with Conductive Coating 2', imageUrl: '/products/cones/own_cones_2.jpg', category: 'OWN cones' },
        { id: 'c9', slug: 'own-cone-3', name: 'OWN Cones with Conductive Coating 3', imageUrl: '/products/cones/own_cones_3.jpg', category: 'OWN cones' },

    ],
    'gears': [
        { id: 'g1', slug: 'pinions', name: 'Pinions', imageUrl: '/products/gear/pinions_1.jpg', category: 'gears' },
        { id: 'g2', slug: 'gear', name: 'Gears', imageUrl: 'products/gear/gear_1.jpg', category: 'gears' },
    ],
    'plastic-strips': [
        { id: 'ps1', slug: 'plastic-strip', name: 'Plastic Strip', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Plastic+Strip', category: 'plastic-strips' },
    ],
    'sub-reflectors': [
        { id: 'sr1', slug: 'splash-plate', name: 'Splash Plate', imageUrl: '/products/sub_reflectors/splash_plate.jpg', category: 'sub-reflectors' },
        { id: 'sr2', slug: 'sub-reflector-1', name: 'Sub Reflector', imageUrl: '/products/sub_reflectors/sub_reflectors.jpg', category: 'sub-reflectors' },
    ],
    'pipes': [
        { id: 'p1', slug: 'pipe-1', name: 'Pipe 1', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Pipe+1', category: 'pipes' },
    ],
    'screws': [
        { id: 's1', slug: 'screw-1', name: 'Screw', imageUrl: '/products/screw/screw.jpg', category: 'screws' },
    ],
    'slotted-rings': [
        { id: 'sl1', slug: 'slotted-ring-1', name: 'Slotted Ring 1', imageUrl: '/products/rings/slotted_rings_1.jpg', category: 'slotted-rings' },
        { id: 'sl2', slug: 'slotted-ring-2', name: 'Slotted Ring 2', imageUrl: '/products/rings/slotted_rings_2.jpg', category: 'slotted-rings' },
    ],
    'miscellaneous': [
        { id: 'm1', slug: 'misc-part-1', name: 'PTFE Parts', imageUrl: '/products/miscellaneous/miscellaneous_1.jpg', category: 'miscellaneous' },
        { id: 'm2', slug: 'misc-part-2', name: 'Washer and Spacers', imageUrl: '/products/miscellaneous/miscellaneous_2.jpg', category: 'miscellaneous' },
        { id: 'm3', slug: 'misc-part-3', name: 'Metal Machined Parts', imageUrl: '/products/miscellaneous/miscellaneous_3.jpg', category: 'miscellaneous' },
        { id: 'm4', slug: 'misc-part-4', name: '⁠Extrusion & Machined Components', imageUrl: '/products/miscellaneous/miscellaneous_4.jpg', category: 'miscellaneous' },
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
        title: 'OWN Cones',
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
    const [expandedSlug, setExpandedSlug] = useState<string | null>(null)
    const [galleryItems, setGalleryItems] = useState<any[]>([])
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null)

    function openGalleryFor(feature) {
        if (expandedSlug === feature.slug) {
            closeGallery()
            return
        }

        let category: string | null = null
        let subFilter: string | null = null

        if (feature.slug.startsWith('cones')) {
            category = 'OWN cones'
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
                                                        <Link key={g.id} href={`/products/${g.slug}`} className="block min-w-[160px] max-w-[200px] text-left group">
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
