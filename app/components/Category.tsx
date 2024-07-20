import React from 'react';
import { ProductCategory } from "../models/productModel";

const Category: React.FC<ProductCategory> = ({ name, link, className }) => {
    return (
        <a
            href={link}
            className={`flex items-center justify-center h-44 text-4xl p-4 rounded-lg text-white font-bold shadow-custom-box-shadow ${className}`}
        >
            {name}
        </a>
    );
};

export default Category;
