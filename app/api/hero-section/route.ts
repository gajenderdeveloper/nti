import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    try {
        const dir = path.join(process.cwd(), 'public', 'hero-section')
        const files = await fs.promises.readdir(dir)
        const images = files.filter((f) => /\.(jpe?g|png|webp|gif|svg)$/i.test(f)).map((f) => `/hero-section/${f}`)
        return NextResponse.json(images)
    } catch (e) {
        return NextResponse.json([], { status: 200 })
    }
}
