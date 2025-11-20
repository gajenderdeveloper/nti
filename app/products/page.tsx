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

// Get all products as a flat array
function getAllProducts() {
    const allProducts: any[] = []
    for (const category in MOCK_PRODUCTS) {
        allProducts.push(...MOCK_PRODUCTS[category])
    }
    return allProducts
}

const NTI_BLUE_COLOR = '#13395d';
const BG_COLOR = '#e6f0fa';

export default function ProductsPage() {
    const allProducts = getAllProducts()

    return (
        <section className="bg-[#e6f0fa] min-h-screen py-12 font-sans text-gray-900" style={{ backgroundColor: BG_COLOR }}>
            <main className="max-w-7xl mx-auto px-4">
                <section className="mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#13395d] text-center mb-4" style={{ color: NTI_BLUE_COLOR }}>Products</h1>
                    <p className="mb-3 text-center text-gray-700">
                        Newtech Industries is a prominent Manufacturer and Supplier offering a comprehensive range of Precision Machined parts in metal, and
                        Plastics. Our products are widely acknowledged for their precise dimensions, robust construction, and excellent finish. All products are tested on
                        different quality parameters to ensure strength and durability.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#13395d] text-center mb-6" style={{ color: NTI_BLUE_COLOR }}>All Products</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {allProducts.map((product) => (
                            <Link key={product.id} href={`/products/${product.slug}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                                <div className="h-48 bg-slate-50 flex items-center justify-center p-4">
                                    <img src={product.imageUrl} alt={product.name} className="object-contain max-h-full max-w-full" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-[#13395d] mb-1 group-hover:underline">{product.name}</h3>
                                    <p className="text-sm text-gray-600 capitalize">{product.category}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </section>
    )
}
