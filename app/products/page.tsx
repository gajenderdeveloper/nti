import Link from 'next/link'
import { products } from '../../data/products'

const categories = [
    { key: 'cones', title: 'Cones', desc: 'Cones used in winding and coating applications.' },
    { key: 'screws', title: 'Screws', desc: 'Fasteners and custom screws for machinery.' },
    { key: 'rollers', title: 'Rollers', desc: 'Industrial rollers.' },
    { key: 'gears', title: 'Gears', desc: 'Gears, pinions and sprockets for power transmission.' }
]

export default function ProductsPage() {
    return (
        <section className="bg-[#e6f0fa] min-h-screen py-12">
            <main className="max-w-7xl mx-auto px-4">
                <section className="mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nti-blue text-center mb-4">Products</h1>
                    <p className="mb-3 text-center">
                        Newtech Industries is a prominent Manufacturer and Supplier offering a comprehensive range of Precision Machined parts in metal, Epoxy, and
                        Plastics. Our products are widely acknowledged for their precise dimensions, robust construction, and excellent finish. All products are tested on
                        different quality parameters to ensure strength and durability.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-nti-blue text-center mb-6">Product Categories</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat) => (
                            <Link key={cat.key} href={`/products/${cat.key}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-40 bg-slate-100 flex items-center justify-center">
                                    {/* Using a placeholder — replace with category hero images if available */}
                                    <div className="text-center">
                                        <div className="font-semibold text-lg text-nti-blue">{cat.title}</div>
                                        <div className="text-sm text-gray-700 mt-2">{cat.desc}</div>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <span className="inline-block bg-nti-blue text-white px-3 py-1 rounded">Open {cat.title}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </section>
    )
}
