import React from "react";
import "./home.css"
import {FaBook, FaCartPlus, FaHome, FaMobile, FaSearch, FaTshirt} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    let iconStyles = { color: "#0284C7", fontSize: "1rem" };
    let iconCards = { color: "#1F2937", fontSize: "3rem" };

    return (
        <>
            <section className="py-12 md:py-20 bg-gradient-to-r from-sky-700 to-sky-400 text-white">
                <div className="container mx-auto px-10 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Descubre productos increíbles</h1>
                        <p className="text-xl mb-8 opacity-90">La forma más simple de comprar y vender en línea.</p>
                        <a onClick={() => navigate("/products")}>
                            <button
                                className="px-6 py-3 bg-white text-sky-600 font-medium rounded-lg hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                                <FaSearch style={iconStyles}/><span>Explorar ahora</span>
                            </button>
                        </a>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                            alt="Marketplace"
                            className="rounded-xl shadow-2xl max-w-md w-full floating hover-scale"
                        />
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Categorías populares</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: <FaTshirt style={iconCards}/>, name: 'Moda'},
                            { icon: <FaMobile style={iconCards}/>, name: 'Tecnología'},
                            { icon: <FaHome style={iconCards}/>, name: 'Hogar'},
                            { icon: <FaBook style={iconCards}/>, name: 'Libros'}
                        ].map((category, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl bg-sky-100 text-center hover-scale transition cursor-pointer`}
                            >
                                <div className="text-3xl mb-4 flex justify-center text-gray-800">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{category.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Productos destacados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                                name: 'Smartphone Pro',
                                price: '$599.99'
                            },
                            {
                                img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                                name: 'Reloj Inteligente',
                                price: '$199.99'
                            },
                            {
                                img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                                name: 'Zapatos Deportivos',
                                price: '$89.99'
                            }
                        ].map((product, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover-scale transition">
                            <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                    <p className="text-sky-700 font-bold">{product.price}</p>
                                    <button className="mt-4 w-full py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition flex items-center gap-2 justify-center">
                                        <FaCartPlus style={{...iconStyles,fontSize:'1.5rem'}} />
                                        <p>Añadir al carrito</p>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;