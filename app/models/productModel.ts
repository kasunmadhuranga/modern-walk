export interface Product {
    id?: number;
    title: string;
    price: string;
    description: string;
    image: string;
}

export interface ProductCategory {
    name: string;
    link: string;
    className?: string;
}
