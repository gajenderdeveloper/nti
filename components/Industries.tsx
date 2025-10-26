const industries = ['Construction Equipment', 'Medical', 'Telecommunications', 'Power & Energy', 'Defence', 'Agro Machinery', 'Exports']

export default function Industries() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-xl font-semibold">Industries Served</h3>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {industries.map((i) => (
                        <div key={i} className="p-4 bg-white border rounded text-center">{i}</div>
                    ))}
                </div>
            </div>
        </section>
    )
}
