import Link from 'next/link'
import { products } from '../../../data/products'

export default function GearsPage() {
    const items = products.filter((p) => p.category === 'gears')
    return (
        <section className="bg-[#e6f0fa] min-h-screen py-12">
            <main className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-nti-blue mb-4">Gears</h1>
                <p className="text-gray-700 mb-6">Gears, pinions and sprockets. Click an item to see full details.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((p) => (
                        <article key={p.id} className="bg-white rounded shadow overflow-hidden">
                            <Link href={`/products/${p.id}`} className="block">
                                <div className="h-44 bg-gray-100 flex items-center justify-center overflow-hidden">
                                    <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-3">
                                    <div className="font-medium text-lg">{p.name}</div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </main>
        </section>
    )
}
