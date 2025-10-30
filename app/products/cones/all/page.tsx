import Link from 'next/link'
import { products } from '../../../../data/products'

export default function ConesPage({ searchParams }: { searchParams?: { sub?: string } }) {
    const sub = searchParams?.sub ? String(searchParams.sub).toLowerCase() : null
    let prod = products.filter((p) => p.category === 'cones')

    let items1 = prod.filter((p) => ((p as any).subCategory || '').toLowerCase().includes('with'))
    let items2 = prod.filter((p) => ((p as any).subCategory || '').toLowerCase().includes('without'))

    // Show the intended counts per sub-section on the "all" page
    // Requirements: 8 items for "With Conductive Paint" and 7 items for "Without Conductive Paint"
    const items1Preview = items1.slice(0, 8)
    const items2Preview = items2.slice(0, 7)


    const title1 = 'OWN CONES — With Conductive Paints';
    const title2 = 'OWN CONES — Without Conductive Paints';

    return (
        <section className="bg-[#e6f0fa] min-h-screen py-12">
            <main className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-nti-blue mb-4">{title1}</h1>
                <p className="text-gray-700 mb-6">Our range of cones. Click any product to see details.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items1Preview.map((p) => (
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
                <h1 className="text-3xl font-bold text-nti-blue mt-16 mb-4">{title2}</h1>
                <p className="text-gray-700 mb-6">Our range of cones. Click any product to see details.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items2Preview.map((p) => (
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
