import Link from 'next/link'

const MOCK_PRODUCTS = {
    'rollers': [
        { id: 'r1', slug: 'cable-roller', name: 'Cable Roller', imageUrl: '/products/roller/cable_roller.jpg', category: 'rollers' },
        { id: 'r2', slug: 'discharge-roller', name: 'Discharge Roller', imageUrl: '/products/roller/discharge_roller.jpg', category: 'rollers' },
        { id: 'r3', slug: 'simple-roller', name: 'Simple Roller', imageUrl: '/products/roller/simple_roller.jpg', category: 'rollers' },
    ],
    'cones': [
        { id: 'c1', slug: 'color-cone-1', name: 'Color Cone 1', imageUrl: '/products/cones/color_cones_1.jpg', category: 'cones' },
        { id: 'c2', slug: 'color-cone-2', name: 'Color Cone 2', imageUrl: '/products/cones/color_cones_2.jpg', category: 'cones' },
        { id: 'c3', slug: 'colorless-cone-1', name: 'Colorless Cone 1', imageUrl: '/products/cones/colorless_cones_1.jpg', category: 'cones' },
        { id: 'c4', slug: 'colorless-cone-2', name: 'Colorless Cone 2', imageUrl: '/products/cones/colorless_cones_2.jpg', category: 'cones' },
        { id: 'c5', slug: 'colorless-cone-3', name: 'Colorless Cone 3', imageUrl: '/products/cones/colorless_cones_3.jpg', category: 'cones' },
        { id: 'c6', slug: 'colorless-cone-4', name: 'Colorless Cone 4', imageUrl: '/products/cones/colorless_cones_4.jpg', category: 'cones' },
        { id: 'c7', slug: 'colorless-cone-5', name: 'Colorless Cone 5', imageUrl: '/products/cones/colorless_cones_5.jpg', category: 'cones' },
        { id: 'c8', slug: 'colorless-cone-6', name: 'Colorless Cone 6', imageUrl: '/products/cones/colorless_cones_6.jpg', category: 'cones' },
        { id: 'c9', slug: 'own-cone-1', name: 'OWN Cone 1', imageUrl: '/products/cones/own_cones_1.jpg', category: 'cones' },
        { id: 'c10', slug: 'own-cone-2', name: 'OWN Cone 2', imageUrl: '/products/cones/own_cones_2.jpg', category: 'cones' },
        { id: 'c11', slug: 'own-cone-3', name: 'OWN Cone 3', imageUrl: '/products/cones/own_cones_3.jpg', category: 'cones' },
    ],
    'gears': [
        { id: 'g1', slug: 'gear-1', name: 'Gear 1', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Gear+1', category: 'gears' },
        { id: 'g2', slug: 'sprocket-1', name: 'Sprocket 1', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Sprocket+1', category: 'gears' },
    ],
    'plastic-strips': [
        { id: 'ps1', slug: 'plastic-strip', name: 'Plastic Strip', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Plastic+Strip', category: 'plastic-strips' },
    ],
    'sub-reflectors': [
        { id: 'sr1', slug: 'sub-reflector-1', name: 'Sub Reflector 1', imageUrl: '/products/sub_reflectors/sub_reflectors_1.jpg', category: 'sub-reflectors' },
        { id: 'sr2', slug: 'sub-reflector-2', name: 'Sub Reflector 2', imageUrl: '/products/sub_reflectors/sub_reflectors_2.jpg', category: 'sub-reflectors' },
    ],
    'pipes': [
        { id: 'p1', slug: 'pipe-1', name: 'Pipe 1', imageUrl: 'https://placehold.co/200x200/eee/13395d?text=Pipe+1', category: 'pipes' },
    ],
    'screws': [
        { id: 's1', slug: 'screw-1', name: 'Screw 1', imageUrl: '/products/screw/screw.jpg', category: 'screws' },
    ],
    'slotted-rings': [
        { id: 'sl1', slug: 'slotted-ring-1', name: 'Slotted Ring 1', imageUrl: '/products/rings/slotted_rings_1.jpg', category: 'slotted-rings' },
        { id: 'sl2', slug: 'slotted-ring-2', name: 'Slotted Ring 2', imageUrl: '/products/rings/slotted_rings_2.jpg', category: 'slotted-rings' },
    ],
    'miscellaneous': [
        { id: 'm1', slug: 'misc-part-1', name: 'Misc. Part 1', imageUrl: '/products/miscellaneous/miscellaneous_1.jpg', category: 'miscellaneous' },
        { id: 'm2', slug: 'misc-part-2', name: 'Misc. Part 2', imageUrl: '/products/miscellaneous/miscellaneous_2.jpg', category: 'miscellaneous' },
        { id: 'm3', slug: 'misc-part-3', name: 'Misc. Part 3', imageUrl: '/products/miscellaneous/miscellaneous_3.jpg', category: 'miscellaneous' },
        { id: 'm4', slug: 'misc-part-4', name: 'Misc. Part 4', imageUrl: '/products/miscellaneous/miscellaneous_4.jpg', category: 'miscellaneous' },
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
                <Link href="/#products" className="text-[#13395d] underline">← Back to Products</Link>
            </main>
        )
    }

    return (
        <main className="max-w-6xl mx-auto px-4 py-12 bg-[#e6f0fa] min-h-screen">
            <div className="mb-4">
                <Link href="/#products" className="text-[#13395d] inline-block mr-4 underline">← Back to Products</Link>
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
