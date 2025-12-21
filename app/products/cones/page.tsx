import Link from 'next/link'

const PRODUCTS_WITHOUT_COATING = [
    { id: 'c1', slug: 'colorless-cone-1', name: 'OWN Cones without Coating 1', imageUrl: '/products/cones/colorless_cones_1.webp', category: 'cones' },
    { id: 'c2', slug: 'colorless-cone-2', name: 'OWN Cones without Coating 2', imageUrl: '/products/cones/colorless_cones_2.webp', category: 'cones' },
    { id: 'c3', slug: 'colorless-cone-3', name: 'OWN Cones without Coating 3', imageUrl: '/products/cones/colorless_cones_3.webp', category: 'cones' },
    { id: 'c4', slug: 'colorless-cone-4', name: 'OWN Cones without Coating 4', imageUrl: '/products/cones/colorless_cones_4.webp', category: 'cones' },
    { id: 'c5', slug: 'colorless-cone-5', name: 'OWN Cones without Coating 5', imageUrl: '/products/cones/colorless_cones_5.webp', category: 'cones' },
    { id: 'c6', slug: 'colorless-cone-6', name: 'OWN Cones without Coating 6', imageUrl: '/products/cones/colorless_cones_6.webp', category: 'cones' },
]

const PRODUCTS_WITH_COATING = [
    { id: 'c7', slug: 'own-cone-1', name: 'OWN Cones with Conductive Coating 1', imageUrl: '/products/cones/own_cones_1.webp', category: 'cones' },
    { id: 'c8', slug: 'own-cone-2', name: 'OWN Cones with Conductive Coating 2', imageUrl: '/products/cones/own_cones_2.webp', category: 'cones' },
    { id: 'c9', slug: 'own-cone-3', name: 'OWN Cones with Conductive Coating 3', imageUrl: '/products/cones/own_cones_3.webp', category: 'cones' },
]

export default function ConesPage() {
    return (
        <main className="py-16 bg-[#e6f0fa] min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#13395d] mt-4">OWN Cones</h1>
                    <p className="text-gray-700 mt-2">Browse our range of OWN cones with and without conductive coating.</p>
                </div>

                {/* OWN Cones without Coating Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-[#13395d] mb-6">OWN Cones without Coating</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {PRODUCTS_WITHOUT_COATING.map((product) => (
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
                </section>

                {/* OWN Cones with Coating Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-[#13395d] mb-6">OWN Cones with Conductive Coating</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {PRODUCTS_WITH_COATING.map((product) => (
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
                </section>
            </div>
        </main>
    )
}
