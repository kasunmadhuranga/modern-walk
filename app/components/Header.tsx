import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-custom-white text-custom-black p-4 border-b-4 border-[#D9D9D9]">
            <div className="container mx-auto flex justify-center items-center">
                <Link href="/" className="text-4xl font-bold text-center">
                    Modern Walk
                </Link>
            </div>
        </header>
    );
};

export default Header;
