const facilities = [
    'VMC 3, 4 & 5 Axis Machines',
    'CNC Turning, Tsugami Slide Head',
    'Laser Marking, MIG Welding',
    'Surface Grinding, CMM, Profile Projector',
    '30% Expansion Capacity Available',
    'In-house CAD/CAM Design Team'
]

export default function Facilities() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-xl font-semibold">Facilities & Capabilities</h3>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {facilities.map((f) => (
                        <div key={f} className="p-4 bg-white border rounded flex gap-3 items-center">
                            <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center">⚙️</div>
                            <div className="text-sm text-slate-700">{f}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
