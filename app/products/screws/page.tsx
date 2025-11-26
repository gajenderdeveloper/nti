import Link from 'next/link'

const PRODUCTS = [
    { id: 's1', slug: 'screw-1', name: 'Screw', imageUrl: '/products/screw/screw.jpg', category: 'screws' },
]

export default function ScrewsPage() {
    return (
        <main className="py-16 bg-[#e6f0fa] min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#13395d] mt-4">Screws</h1>
                    <p className="text-gray-700 mt-2">Browse our range of precision-manufactured screws.</p>
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
