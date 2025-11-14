const Link = ({ href, children, ...props }) => <a href={href} {...props}>{children}</a>;

const productsNav = [
    {
        title: 'Rollers',
        href: '/products/rollers',
    },
    {
        title: 'OWN Cones',
        href: '/products/cones/all',
    },
    {
        title: 'Pinions, Gears & Sprockets',
        href: '/products/gears-pinions-sprockets',
    },
    {
        title: 'Plastic Strips',
        href: '/products/plastic-strips',
    },
    {
        title: 'Sub Reflectors / Splash Plates',
        href: '/products/sub-reflectors',
    },
    {
        title: 'Pipes',
        href: '/products/pipes',
    },
    {
        title: 'Screws',
        href: '/products/screws',
    },
    {
        title: 'Slotted Rings',
        href: '/products/slotted-rings',
    },
    {
        title: 'Miscellaneous',
        href: '/products/miscellaneous',
    },
]

const NTI_BLUE_COLOR = '#13395d';
const BG_COLOR = '#e6f0fa';

export default function ProductsPage() {
    return (
        <section className="bg-[#e6f0fa] min-h-screen py-12 font-sans text-gray-900" style={{ backgroundColor: BG_COLOR }}>
            <main className="max-w-7xl mx-auto px-4">
                <section className="mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nti-blue text-center mb-4" style={{ color: NTI_BLUE_COLOR }}>Products</h1>
                    <p className="mb-3 text-center">
                        Newtech Industries is a prominent Manufacturer and Supplier offering a comprehensive range of Precision Machined parts in metal, Epoxy, and
                        Plastics. Our products are widely acknowledged for their precise dimensions, robust construction, and excellent finish. All products are tested on
                        different quality parameters to ensure strength and durability.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-nti-blue text-center mb-6" style={{ color: NTI_BLUE_COLOR }}>Product Categories</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productsNav.map((cat) => (
                            <Link key={cat.href} href={cat.href} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" style={{ backgroundColor: NTI_BLUE_COLOR }}>
                                <div className="h-40 bg-slate-100 flex items-center justify-center p-4">
                                    <div className="text-center">
                                        <div className="font-semibold text-lg text-nti-blue" style={{ color: NTI_BLUE_COLOR }}>{cat.title}</div>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <span className="inline-block text-white px-3 py-1 rounded" >
                                        {cat.title}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </section>
    )
}
