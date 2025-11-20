import Link from 'next/link'

const PRODUCTS = [
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
]

export default function ConesPage() {
    return (
        <main className="py-16 bg-[#e6f0fa] min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-8">
                    <Link href="/#products" className="text-[#13395d] underline">← Back to Products</Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#13395d] mt-4">Cones</h1>
                    <p className="text-gray-700 mt-2">Browse our range of OWN cones and precision-manufactured cone products.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {PRODUCTS.map((product) => (
                        <Link key={product.id} href={`/products/${product.slug}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="h-48 bg-slate-50 flex items-center justify-center p-4">
                                <img src={product.imageUrl} alt={product.name} className="object-contain max-h-full max-w-full" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg text-[#13395d] mb-1 group-hover:underline">{product.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
