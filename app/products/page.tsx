import Link from 'next/link'

const MOCK_PRODUCTS = {
    'rollers': [
        { id: 'r1', slug: 'cable-roller', name: 'Cable Press Roller', imageUrl: 'products/roller/cable_roller.webp', category: 'rollers' },
        { id: 'r2', slug: 'discharge-roller', name: 'Discharge Roller', imageUrl: 'products/roller/discharge_roller.webp', category: 'rollers' },
        { id: 'r3', slug: 'misc-roller', name: 'Misc Roller', imageUrl: 'products/roller/misc_roller.webp', category: 'rollers' },
    ],
    'OWN cones': [
        { id: 'c1', slug: 'colorless-cone-1', name: 'OWN Cones without Coating 1', imageUrl: 'products/cones/colorless_cones_1.webp', category: 'OWN cones' },
        { id: 'c2', slug: 'colorless-cone-2', name: 'OWN Cones without Coating 2', imageUrl: 'products/cones/colorless_cones_2.webp', category: 'OWN cones' },
        { id: 'c3', slug: 'colorless-cone-3', name: 'OWN Cones without Coating 3', imageUrl: 'products/cones/colorless_cones_3.webp', category: 'OWN cones' },
        { id: 'c4', slug: 'colorless-cone-4', name: 'OWN Cones without Coating 4', imageUrl: 'products/cones/colorless_cones_4.webp', category: 'OWN cones' },
        { id: 'c5', slug: 'colorless-cone-5', name: 'OWN Cones without Coating 5', imageUrl: 'products/cones/colorless_cones_5.webp', category: 'OWN cones' },
        { id: 'c6', slug: 'colorless-cone-6', name: 'OWN Cones without Coating 6', imageUrl: 'products/cones/colorless_cones_6.webp', category: 'OWN cones' },
        { id: 'c7', slug: 'own-cone-1', name: 'OWN Cones with Conductive Coating 1', imageUrl: 'products/cones/own_cones_1.webp', category: 'OWN cones' },
        { id: 'c8', slug: 'own-cone-2', name: 'OWN Cones with Conductive Coating 2', imageUrl: 'products/cones/own_cones_2.webp', category: 'OWN cones' },
        { id: 'c9', slug: 'own-cone-3', name: 'OWN Cones with Conductive Coating 3', imageUrl: 'products/cones/own_cones_3.webp', category: 'OWN cones' },

    ],
    'gears': [
        { id: 'g1', slug: 'pinions', name: 'Pinions', imageUrl: 'products/gear/pinions_1.webp', category: 'gears' },
        { id: 'g2', slug: 'gear', name: 'Gears', imageUrl: 'products/gear/gear_1.webp', category: 'gears' },
    ],
    'plastic-strips': [
        { id: 'ps1', slug: 'plastic-strip', name: 'Plastic Strip', imageUrl: 'products/plastic_strips/plastic_strip.webp', category: 'plastic-strips' },
    ],
    'sub-reflectors': [
        { id: 'sr1', slug: 'splash-plate', name: 'Splash Plate', imageUrl: 'products/sub_reflectors/splash_plate.webp', category: 'sub-reflectors' },
        { id: 'sr2', slug: 'sub-reflector-1', name: 'Sub Reflector', imageUrl: 'products/sub_reflectors/sub_reflectors.webp', category: 'sub-reflectors' },
    ],
    'screws': [
        { id: 's1', slug: 'screw-1', name: 'Screw', imageUrl: 'products/screw/screw.webp', category: 'screws' },
    ],
    'slotted-rings': [
        { id: 'sl1', slug: 'slotted-ring-1', name: 'Slotted Ring 1', imageUrl: 'products/rings/slotted_rings_1.webp', category: 'slotted-rings' },
        { id: 'sl2', slug: 'slotted-ring-2', name: 'Slotted Ring 2', imageUrl: 'products/rings/slotted_rings_2.webp', category: 'slotted-rings' },
    ],
    'miscellaneous': [
        { id: 'm1', slug: 'misc-part-1', name: 'PTFE Parts', imageUrl: 'products/miscellaneous/miscellaneous_1.webp', category: 'miscellaneous' },
        { id: 'm2', slug: 'misc-part-2', name: 'Washer and Spacers', imageUrl: 'products/miscellaneous/miscellaneous_2.webp', category: 'miscellaneous' },
        { id: 'm3', slug: 'misc-part-3', name: 'Metal Machined Parts', imageUrl: 'products/miscellaneous/miscellaneous_3.webp', category: 'miscellaneous' },
        { id: 'm4', slug: 'misc-part-4', name: '⁠Extrusion & Machined Components', imageUrl: 'products/miscellaneous/miscellaneous_4.webp', category: 'miscellaneous' },
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
