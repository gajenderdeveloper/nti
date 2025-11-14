export const products = [
    ...Array.from({ length: 8 }).map((_, i) => {
        const idx = String(i + 1).padStart(3, '0')
        return {
            id: `cone-with-${idx}`,
            category: 'cones',
            name: `OWN Cone Type ${i + 1}`,
            description: `OWN Cone Type ${i + 1} (With Conductive Paint) is a high-quality cone used in industrial winding and coating applications.`,
            imageUrl: `/images/products/cones/cone-with-${idx}.jpg`,
            subCategory: 'With Conductive Paint'
        }
    }),
    ...Array.from({ length: 7 }).map((_, i) => {
        const idx = String(i + 1).padStart(3, '0')
        return {
            id: `cone-without-${idx}`,
            category: 'cones',
            name: `OWN Cone Type ${i + 1}`,
            description: `OWN Cone Type ${i + 1} (Without Conductive Paint) is a high-quality cone used in industrial winding and coating applications.`,
            imageUrl: `/images/products/cones/cone-without-${idx}.jpg`,
            subCategory: 'Without Conductive Paint'
        }
    }),

    ...Array.from({ length: 10 }).map((_, i) => {
        const idx = String(i + 1).padStart(3, '0')
        return {
            id: `screw-${idx}`,
            category: 'screws',
            name: `Custom Screw ${i + 1}`,
            description: `Custom Screw ${i + 1} is precision-machined for assembly and mechanical fastening. Provide material and thread preferences for exact specs.`,
            imageUrl: `/images/products/screws/screw-${idx}.jpg`
        }
    }),

    ...Array.from({ length: 15 }).map((_, i) => {
        const idx = String(i + 1).padStart(3, '0')
        return {
            id: `roller-${idx}`,
            category: 'rollers',
            name: `Roller ${i + 1}`,
            description: `Roller ${i + 1} is built for heavy industrial applications. Available in multiple diameters and finishes.`,
            imageUrl: `/images/products/rollers/roller-${idx}.jpg`
        }
    }),

    ...Array.from({ length: 6 }).map((_, i) => {
        const idx = String(i + 1).padStart(3, '0')
        return {
            id: `gear-${idx}`,
            category: 'gears',
            name: `Gear / Sprocket ${i + 1}`,
            description: `Gear / Sprocket ${i + 1} is a precision toothed component suitable for power transmission and motion control systems.`,
            imageUrl: `/images/products/gears/gear-${idx}.jpg`
        }
    })
].flat()

export function getProductById(id) {
    return products.find((p) => p.id === id)
}

export function getProductsByCategory(category) {
    return products.filter((p) => p.category === category)
}

export default products
