import Image from 'next/image';
import { Product } from "../models/productModel";

const Card: React.FC<Product> = ({ title, price, description, image }) => {
    const backgroundColorClass = title.toLowerCase().includes("women")
        ? "bg-custom-pink"
        : "bg-custom-green";

    return (
        <div className="bg-white shadow-custom-box-shadow rounded-lg overflow-hidden text-center">
            <div className='pb-5'>
                <h3 className="text-lg font-bold text-custom-black pt-4 pb-4">{title.split(' ').slice(0, 3).join(' ')}</h3>
                <div className='relative w-full max-w-[50%] mx-auto'>
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="h-44 w-full mx-auto object-cover"
                    />
                </div>
            </div>
            <div className={`${backgroundColorClass} pt-3 pb-5 rounded-t-lg`}>
                <p className="text-custom-blue text-xl font-bold">{price}</p>
                <p className="text-custom-black w-full max-w-[75%] mx-auto truncate-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;
