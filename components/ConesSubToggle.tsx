"use client"
import Link from 'next/link'
import { useState } from 'react'

type Props = {
    initialOpen?: boolean
}

export default function ConesSubToggle({ initialOpen = false }: Props) {
    const [open, setOpen] = useState(initialOpen)

    return (
        <div className="mb-6">
            <button
                type="button"
                onClick={() => setOpen((s) => !s)}
                className="inline-flex items-center gap-2 px-3 py-2 bg-white border rounded text-nti-blue"
                aria-expanded={open}
            >
                <span className="font-bold">{open ? '−' : '+'}</span>
                <span className="font-semibold">OWN CONES</span>
            </button>

            {open && (
                <div className="mt-3 space-y-2">
                    <Link href="?sub=with" className="block text-nti-blue hover:underline">
                        OWN CONES — With Conductive Paints
                    </Link>
                    <Link href="?sub=without" className="block text-nti-blue hover:underline">
                        OWN CONES — Without Conductive Paints
                    </Link>
                </div>
            )}
        </div>
    )
}
