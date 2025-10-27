import Link from 'next/link'
import { products } from '../../../data/products'

export default function ConesPage({ searchParams }: { searchParams?: { sub?: string } }) {
    const sub = searchParams?.sub ? String(searchParams.sub).toLowerCase() : null
    let items = products.filter((p) => p.category === 'cones')

    if (sub === 'with') {
        items = items.filter((p) => ((p as any).subCategory || '').toLowerCase().includes('with'))
    } else if (sub === 'without') {
        items = items.filter((p) => ((p as any).subCategory || '').toLowerCase().includes('without'))
    }

    const title = sub === 'with' ? 'OWN CONES — With Conductive Paints' : sub === 'without' ? 'OWN CONES — Without Conductive Paints' : 'Cones'

    return (
        <section className="bg-[#e6f0fa] min-h-screen py-12">
            <main className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-nti-blue mb-4">{title}</h1>
                <p className="text-gray-700 mb-6">Our range of cones. Click any product to see details.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((p) => (
                        <article key={p.id} className="bg-white rounded shadow overflow-hidden">
                            <Link href={`/products/${p.id}`} className="block">
                                <div className="h-44 bg-gray-100 flex items-center justify-center overflow-hidden">
                                    <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-3">
                                    <div className="font-medium text-lg">{p.name}</div>
                                    {(p as any).subCategory && <div className="text-sm text-gray-600 mt-1">{(p as any).subCategory}</div>}
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </main>
        </section>
    )
}
