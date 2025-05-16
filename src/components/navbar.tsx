import React from 'react';
import { FaStore, FaSignInAlt, FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
    let iconStyles = { color: "#0284C7", fontSize: "2rem" };
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-3 py-3 flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2">
                    <FaStore style={iconStyles} />
                    <span className="text-xl font-bold text-sky-700">MarketPro</span>
                </a>
               {/* <nav className="hidden md:flex space-x-8">
                    <a href="#" className="font-medium hover:text-sky-600 transition">Inicio</a>
                    <a href="#" className="font-medium hover:text-sky-400 transition">Productos</a>
                    <a href="#" className="font-medium hover:text-sky-400 transition">Vendedores</a>
                </nav>*/}
                <div className="flex items-center gap-2">
                    <a href="/register" className="px-4 py-2 bg-sky-700 text-white text-sm font-medium rounded-lg hover:bg-sky-800 transition flex items-center gap-[0.5rem]">
                        <FaSignInAlt style={{color: 'white'}} /><span>Iniciar Sesión</span>
                    </a>
                    <FaShoppingCart style={iconStyles} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;

