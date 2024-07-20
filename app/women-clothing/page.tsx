'use client';
import React from 'react';
import { womenProducts } from '../services/productService';
import Card from '../components/Card';
import { Product } from '../models/productModel';
import useFetch from '../hooks/useFetch';

const WomensClothing: React.FC = () => {
    const { data: products, loading, error } = useFetch<Product[]>(womenProducts);

    return (
        <div>
            {loading ? (
                <p className="text-center text-xl">Loading...</p>
            ) : error ? (
                <p className="text-center text-xl text-red-500">{error}</p>
            ) : (
                <div className='container mx-auto p-4 font-roboto bg-custom-white'>
                    <div className='max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%] mx-auto'>
                        <h1 className="text-2xl font-bold mb-6 mt-6">Women&apos;s Clothing</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                            {(products || []).map((product) => (
                                <Card
                                    key={product.id}
                                    title={product.title}
                                    price={`$${product.price}`}
                                    description={product.description}
                                    image={product.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default WomensClothing;
