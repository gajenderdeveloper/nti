import Link from 'next/link'

const PRODUCTS = [
       { id: 'g1', slug: 'pinions', name: 'Pinions', imageUrl: '/products/gear/pinions_1.jpg', category: 'gears' },
        { id: 'g2', slug: 'gear', name: 'Gears', imageUrl: '/products/gear/gear_1.jpg', category: 'gears' },
]

export default function GearsPage() {
    return (
        <main className="py-16 bg-[#e6f0fa] min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-8">
                    <Link href="/#products" className="text-[#13395d] underline">← Back to Products</Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#13395d] mt-4">Pinions, Gears & Sprockets</h1>
                    <p className="text-gray-700 mt-2">Browse our range of precision gears, pinions, and sprockets.</p>
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
