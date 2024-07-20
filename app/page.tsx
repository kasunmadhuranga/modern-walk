'use client';

import React from 'react';
import Card from './components/Card';
import Category from './components/Category';
import { allProducts } from './services/productService';
import { Product } from "./models/productModel";
import useFetch from './hooks/useFetch';

const HomePage: React.FC = () => {
  const { data: products, loading, error } = useFetch<Product[]>(allProducts);

  return (
    <>
      <div className="container mx-auto p-4 font-roboto bg-custom-white">
        <div className="mb-8 max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%] mx-auto">
          {loading ? (
            <p className="text-center text-xl">Loading...</p>
          ) : error ? (
            <p className="text-center text-xl text-red-500">{error}</p>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 mt-6">Flash Sale</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                {(products ?? []).slice(0, 4).map((product) => (
                  <Card
                    key={product.id}
                    title={product.title}
                    price={`Rs ${product.price}`}
                    description={product.description}
                    image={product.image}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className='max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%] mx-auto'>
          <h2 className="text-2xl font-bold mb-6 mt-6">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            <Category name="Men's Clothing" link="/mens-clothing" className='bg-custom-green' />
            <Category name="Women's Clothing" link="/women-clothing" className='bg-custom-pink' />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
