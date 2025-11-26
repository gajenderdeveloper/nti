import Link from 'next/link'

const PRODUCTS = [
        { id: 'sr1', slug: 'splash-plate', name: 'Splash Plate', imageUrl: '/products/sub_reflectors/splash_plate.jpg', category: 'sub-reflectors' },
        { id: 'sr2', slug: 'sub-reflector-1', name: 'Sub Reflector', imageUrl: '/products/sub_reflectors/sub_reflectors.jpg', category: 'sub-reflectors' },
]

export default function SubReflectorsPage() {
    return (
        <main className="py-16 bg-[#e6f0fa] min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-8">
                    <Link href="/#products" className="text-[#13395d] underline">← Back to Products</Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#13395d] mt-4">Sub Reflectors / Splash Plates</h1>
                    <p className="text-gray-700 mt-2">Browse our range of sub reflectors and splash plates.</p>
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
