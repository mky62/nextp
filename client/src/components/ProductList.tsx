import React from 'react'
import Image from 'next/image'
import { ProductsType } from '@/types'

const ProductList: React.FC<{ products: ProductsType }> = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
            {products.map((product) => {
                // Get the first color's image
                const firstColor = product.colors[0];
                const imageSrc = product.images[firstColor];

                return (
                    <div key={product.id} className='border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white'>
                        <div className='relative h-[350px] w-full bg-gray-100'>
                            <Image
                                src={imageSrc}
                                alt={product.name}
                                fill
                                className='object-cover'
                            />
                        </div>

                        <div className='p-4'>
                            <h3 className='font-semibold text-lg mb-2'>{product.name}</h3>
                            <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                                {product.shortDescription}
                            </p>

                            <div className='flex items-center justify-between mb-2'>
                                <p className='text-xl font-bold'>${product.price}</p>

                                {/* Color indicators */}
                                <div className='flex gap-1'>
                                    {product.colors.map((color) => (
                                        <div
                                            key={color}
                                            className='w-5 h-5 rounded-full border-2 border-gray-300'
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Available sizes */}
                            <div className='text-xs text-gray-500'>
                                Sizes: {product.sizes.join(', ').toUpperCase()}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList