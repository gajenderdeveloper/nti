export default function WhyChoose() {
    const bullets = ['On-time delivery', 'High-quality assurance', 'Cost-effective manufacturing', 'Wide range of processes', 'Custom engineering solutions']
    return (
        <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-6">
                <h3 className="text-xl font-semibold">Why Choose New Tech</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {bullets.map((b) => (
                        <li key={b} className="p-3 bg-white border rounded">{b}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
