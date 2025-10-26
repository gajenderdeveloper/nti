type Milestone = { year: string; label: string }

const milestones: Milestone[] = [
    { year: '2009', label: 'Company incorporated' },
    { year: '2012', label: 'Entered machining parts segment' },
    { year: '2013', label: 'Began manufacturing engineering plastics' },
    { year: '2016', label: 'First order from construction equipment sector' },
    { year: '2017', label: 'Export to USA (Medical Components)' },
    { year: '2021', label: 'Entered telecommunications' },
    { year: '2023', label: 'Supply to Hydro-turbines sector' },
    { year: '2024', label: 'New Plant at Sector 25, Faridabad' }
]

export default function Timeline() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-xl font-semibold">Key Milestones</h3>
                <div className="mt-6 overflow-x-auto">
                    <div className="flex gap-6 items-center py-6">
                        {milestones.map((m) => (
                            <div key={m.year} className="min-w-[200px] bg-white p-4 border rounded">
                                <div className="text-2xl font-bold">{m.year}</div>
                                <div className="text-slate-600 mt-2">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
