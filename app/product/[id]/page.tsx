import Link from 'next/link'
import { getProductById } from '../../../data/products'

export default function ProductDetail({ params }) {
    const { id } = params
    const product = getProductById(id)

    if (!product) {
        return (
            <main className="max-w-4xl mx-auto p-6 bg-[#e6f0fa]">
                <p>Product not found.</p>
                <Link href="/products" className="text-nti-blue">← Back to All Products</Link>
            </main>
        )
    }

    return (
        <main className="max-w-6xl mx-auto px-4 py-12  bg-[#e6f0fa]">
            <div className="mb-4">
                <Link href="/products" className="text-nti-blue inline-block mr-4">← Back to All Products</Link>
                <Link href="/contact" className="inline-block bg-nti-blue text-white px-4 py-2 rounded">Contact Us</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white border rounded overflow-hidden">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-[480px] object-contain bg-gray-50" />
                </div>

                <div className="p-4">
                    <h1 className="text-3xl font-bold text-nti-blue mb-3">{product.name}</h1>
                    <p className="text-gray-800 mb-4">{product.description}</p>
                    {product.category === 'cones' && (product as any).subCategory && (
                        <p className="font-medium">Type: {(product as any).subCategory}</p>
                    )}
                </div>
            </div>
        </main>
    )
}
