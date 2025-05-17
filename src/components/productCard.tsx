import React from 'react';
import {FaStar, FaShoppingCart, FaPencilAlt} from 'react-icons/fa';
import ButtonWithIcon from './button';

const ProductCard = ({product, type, onButtonClick}) => {
    const translatedCategory = {
        clothing: "ropa",
        books: "libros",
        electronics: "electrónicos",
        sports: "deportivos",
        home: "hogar",
    }

    return (
        <div style={{
            minHeight: "360px"
        }}
            className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-white rounded-lg shadow-md overflow-hidden transition duration-300 relative">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                {product.stock < 10 && (
                    <div
                        className="absolute bottom-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Últimas unidades
                    </div>
                )}
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg text-sky-700 mb-1">{product.name}</h3>
                    <span className="text-sky-700 font-bold">${product.price.toFixed(2)}</span>
                </div>

                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                            />
                        ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{translatedCategory[product.category]}</span>
                    <span>{product.stock} en stock</span>
                </div>

                <div className="mt-4 flex justify-between">
                    {type === 'seller' ? (
                        <ButtonWithIcon
                            icon={<FaPencilAlt style={{color: 'white'}}/>}
                            text="Editar"
                            onClick={()=> onButtonClick(product)}/>
                    ) : (
                        <ButtonWithIcon
                            icon={<FaShoppingCart style={{color: 'white'}}/>}
                            text="Comprar"
                            onClick={() => onButtonClick(product)}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;