import Link from 'next/link'

const MOCK_PRODUCTS = {
    'rollers': [
        { id: 'r1', slug: 'cable-roller', name: 'Cable Press Roller', imageUrl: 'products/roller/cable_roller.jpg', category: 'rollers' },
        { id: 'r2', slug: 'discharge-roller', name: 'Discharge Roller', imageUrl: 'products/roller/discharge_roller.jpg', category: 'rollers' },
        { id: 'r3', slug: 'simple-roller', name: 'Misc Roller', imageUrl: 'products/roller/misc_roller.jpg', category: 'rollers' },
    ],
    'OWN cones': [
        { id: 'c1', slug: 'colorless-cone-1', name: 'OWN Cones without Coating 1', imageUrl: 'products/cones/colorless_cones_1.jpg', category: 'OWN cones' },
        { id: 'c2', slug: 'colorless-cone-2', name: 'OWN Cones without Coating 2', imageUrl: 'products/cones/colorless_cones_2.jpg', category: 'OWN cones' },
        { id: 'c3', slug: 'colorless-cone-3', name: 'OWN Cones without Coating 3', imageUrl: 'products/cones/colorless_cones_3.jpg', category: 'OWN cones' },
        { id: 'c4', slug: 'colorless-cone-4', name: 'OWN Cones without Coating 4', imageUrl: 'products/cones/colorless_cones_4.jpg', category: 'OWN cones' },
        { id: 'c5', slug: 'colorless-cone-5', name: 'OWN Cones without Coating 5', imageUrl: 'products/cones/colorless_cones_5.jpg', category: 'OWN cones' },
        { id: 'c6', slug: 'colorless-cone-6', name: 'OWN Cones without Coating 6', imageUrl: 'products/cones/colorless_cones_6.jpg', category: 'OWN cones' },
        { id: 'c7', slug: 'own-cone-1', name: 'OWN Cones with Conductive Coating 1', imageUrl: 'products/cones/own_cones_1.jpg', category: 'OWN cones' },
        { id: 'c8', slug: 'own-cone-2', name: 'OWN Cones with Conductive Coating 2', imageUrl: 'products/cones/own_cones_2.jpg', category: 'OWN cones' },
        { id: 'c9', slug: 'own-cone-3', name: 'OWN Cones with Conductive Coating 3', imageUrl: 'products/cones/own_cones_3.jpg', category: 'OWN cones' },

    ],
    'gears': [
        { id: 'g1', slug: 'pinions', name: 'Pinions', imageUrl: 'products/gear/pinions_1.jpg', category: 'gears' },
        { id: 'g2', slug: 'gear', name: 'Gears', imageUrl: 'products/gear/gear_1.jpg', category: 'gears' },
    ],
    'plastic-strips': [
        { id: 'ps1', slug: 'plastic-strip', name: 'Plastic Strip', imageUrl: 'products/plastic_strips/plastic_strip.jpg', category: 'plastic-strips' },
    ],
    'sub-reflectors': [
        { id: 'sr1', slug: 'splash-plate', name: 'Splash Plate', imageUrl: 'products/sub_reflectors/splash_plate.jpg', category: 'sub-reflectors' },
        { id: 'sr2', slug: 'sub-reflector-1', name: 'Sub Reflector', imageUrl: 'products/sub_reflectors/sub_reflectors.jpg', category: 'sub-reflectors' },
    ],
    'screws': [
        { id: 's1', slug: 'screw-1', name: 'Screw', imageUrl: 'products/screw/screw.jpg', category: 'screws' },
    ],
    'slotted-rings': [
        { id: 'sl1', slug: 'slotted-ring-1', name: 'Slotted Ring 1', imageUrl: 'products/rings/slotted_rings_1.jpg', category: 'slotted-rings' },
        { id: 'sl2', slug: 'slotted-ring-2', name: 'Slotted Ring 2', imageUrl: 'products/rings/slotted_rings_2.jpg', category: 'slotted-rings' },
    ],
    'miscellaneous': [
        { id: 'm1', slug: 'misc-part-1', name: 'PTFE Parts', imageUrl: 'products/miscellaneous/miscellaneous_1.jpg', category: 'miscellaneous' },
        { id: 'm2', slug: 'misc-part-2', name: 'Washer and Spacers', imageUrl: 'products/miscellaneous/miscellaneous_2.jpg', category: 'miscellaneous' },
        { id: 'm3', slug: 'misc-part-3', name: 'Metal Machined Parts', imageUrl: 'products/miscellaneous/miscellaneous_3.jpg', category: 'miscellaneous' },
        { id: 'm4', slug: 'misc-part-4', name: '⁠Extrusion & Machined Components', imageUrl: 'products/miscellaneous/miscellaneous_4.jpg', category: 'miscellaneous' },
    ],
}

function getProductBySlug(slug: string) {
    for (const category in MOCK_PRODUCTS) {
        const product = MOCK_PRODUCTS[category].find((p: any) => p.slug === slug)
        if (product) return product
    }
    return null
}

export default function ProductDetail({ params }: { params: { id: string } }) {
    const { id } = params
    const product = getProductBySlug(id)

    if (!product) {
        return (
            <main className="max-w-4xl mx-auto p-6 bg-[#e6f0fa] min-h-screen">
                <p className="text-slate-700">Product not found.</p>
            </main>
        )
    }

    return (
        <main className="max-w-6xl mx-auto px-4 py-12 bg-[#e6f0fa] min-h-screen">
            <div className="mb-4">
                <Link href="/contact" className="inline-block bg-[#13395d] text-white px-4 py-2 rounded">Contact Us</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white border rounded overflow-hidden">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-[480px] object-contain bg-gray-50" />
                </div>

                <div className="p-4">
                    <h1 className="text-3xl font-bold text-[#13395d] mb-3">{product.name}</h1>
                    <p className="text-gray-800 mb-4">Category: {product.category}</p>
                    <p className="text-gray-700 mb-4">
                        High-quality {product.name.toLowerCase()} manufactured with precision engineering.
                        Our products meet industry standards and are built to last.
                    </p>
                    <div className="mt-6">
                        <Link href="/contact" className="inline-block bg-[#13395d] text-white px-6 py-3 rounded hover:bg-[#0f2a47] transition-colors">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
