import Link from 'next/link'
import Image from 'next/image'
const PRODUCTS = [
    { id: 'sl1', slug: 'slotted-ring-1', name: 'Slotted Ring 1', imageUrl: '/products/rings/slotted_rings_1.webp', category: 'slotted-rings' },
    { id: 'sl2', slug: 'slotted-ring-2', name: 'Slotted Ring 2', imageUrl: '/products/rings/slotted_rings_2.webp', category: 'slotted-rings' },
]

export default function SlottedRingsPage() {
    return (
        <main className="py-16 bg-[#e6f0fa] min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#13395d] mt-4">Slotted Rings</h1>
                    <p className="text-gray-700 mt-2">Browse our range of slotted rings.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {PRODUCTS.map((product) => (
                        <Link key={product.id} href={`/products/${product.slug}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="h-48 bg-slate-50 flex items-center justify-center p-4">
                                <Image src={product.imageUrl} alt={product.name} width={300} height={300} className="object-contain max-h-full max-w-full" />
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
