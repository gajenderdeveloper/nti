import Link from 'next/link'

const products = [
    {
        title: 'Cones',
        slug: 'cones',
        image: '/product-images/cones/Tele-Industries-Page22.jpg',
        description:
            'We manufacture 15 types of various cone designs for industrial and telecommunication applications.',
        cta: 'View Details',
    },
    {
        title: 'Custom Screws & Fasteners',
        slug: 'custom-screws',
        image: '/product-images/custom-screws/STAINLESS-STEEL-PARTS-Page17.jpg',
        description:
            'Precision threads and custom screws. Available in 10 types of materials and sizes to your exact specifications.',
        cta: 'View Details',
    },
    {
        title: 'Pipes & Rollers',
        slug: 'pipes-rollers',
        image: '/product-images/pipes-rollers/roller-bottom-left-Page15.jpg',
        description:
            'Over 15 types of high-durability pipes and rollers designed for material handling and specialty applications.',
        cta: 'View Details',
    },
    {
        title: 'Gears',
        slug: 'gears',
        image: '/product-images/gears/gear-top-left-Page16.jpg',
        description:
            'High-precision gears available in 6 standard types. We also machine fully custom gears to your drawings.',
        cta: 'View Details',
    },
    {
        title: 'Cable Press Roller',
        slug: 'cable-press-roller',
        image: '/product-images/cable-press-rollers/roller-bottom-left-Page15.jpg',
        description: 'Custom-machined press rollers for cable manufacturing and processing lines.',
        cta: 'View Details',
    },
    {
        title: 'Discharge Roller',
        slug: 'discharge-roller',
        image: '/product-images/discharge-rollers/roller-bottom-right-Page15.jpg',
        description:
            'High-performance discharge rollers. Custom-machined to your exact specifications and tolerances.',
        cta: 'View Details',
    },
    {
        title: 'Pinions',
        slug: 'pinions',
        image: '/product-images/pinions/stacked-gears-top-right-Page16.jpg',
        description:
            'Precision-engineered pinions to pair with your gear systems. Custom-built from your specifications.',
        cta: 'View Details',
    },
    {
        title: 'Sprockets',
        slug: 'sprockets',
        image: '/product-images/sprockets/star-gear-center-Page16.jpg',
        description:
            'Durable, custom-machined sprockets for all types of industrial chains and machinery.',
        cta: 'View Details',
    },
    {
        title: 'Construction Pads',
        slug: 'construction-pads',
        image: '/product-images/construction-pads/Construction-Division-Page18.jpg',
        description:
            'Heavy-duty, wear-resistant pads for construction equipment. Manufactured to your requirements.',
        cta: 'View Details',
    },
    {
        title: 'Antenna & Telecom Parts',
        slug: 'antenna-telecom-parts',
        image: '/product-images/antenna-telecom-parts/Rings-Reflector-Page24.jpg',
        description:
            'Including Sub Reflector Antenna Parts, Rings, and Reflectors for the telecommunication industry.',
        cta: 'View Details',
    },
    {
        title: 'Tailor-Made Components',
        slug: 'tailor-made-components',
        image: '/product-images/tailor-made-components/Tailor-Made-Page21.jpg',
        description:
            'Our specialty. We build any precision component from your drawings, samples, or specifications.',
        cta: 'Request a Quote',
        ctaHref: '/contact',
    },
]

export default function ProductsPage() {
    return (
        <section className="bg-[#e6f0fa] py-12">
            <main className="max-w-7xl mx-auto px-4">
                <section className="mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#13395d] text-center mb-4">Products</h1>
                    <p className="mb-3 text-center">
                        Newtech Industries is a prominent Manufacturer and Supplier offering a comprehensive range of Precision Machined parts in metal, Epoxy, and Plastics. Our
                        products are widely acknowledged for their precise dimensions, robust construction, and excellent finish. All products are tested on
                        different quality parameters to ensure strength and durability.
                    </p>
                    <p className="mb-3 text-center">
                        While we offer a wide range of product lines, our core specialty is Tailor-Made Parts. We can develop and manufacture any component from
                        your samples, drawings, or specifications.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#13395d] text-center mb-6">Product Catalogue</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((p) => (
                            <article key={p.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-44 bg-slate-100 flex items-center justify-center overflow-hidden">
                                    {/* Image paths reference public/product-images; replace with exact PDF-extracted images if available */}
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                                    <p className="text-sm text-slate-700 mb-4">{p.description}</p>
                                    <div>
                                        <Link
                                            href={p.ctaHref ?? `/products/${p.slug}`}
                                            className="inline-block bg-[#13395d] hover:bg-slate-900 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
                                        >
                                            {p.cta}
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </section>
    )
}
