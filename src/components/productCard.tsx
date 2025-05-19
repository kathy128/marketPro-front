import {FaStar, FaShoppingCart, FaPencilAlt, FaTrashAlt} from 'react-icons/fa';
import ButtonWithIcon from './button';
import {BiSolidCameraOff} from 'react-icons/bi';
import {userData} from '../store/selectors/userSelector';
import {useSelector} from 'react-redux';
import React from 'react';

const ProductCard: React.FC<any> = ({product, onButtonClick, onRemoveItem}) => {
    const {user} = useSelector(userData);

    return (
        <div style={{
            minHeight: user && user.role === "admin" ? "300px" : "360px"
        }}
            className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-white rounded-lg shadow-md overflow-hidden transition duration-300 relative">
            <div className={"relative overflow-hidden h-48"}>
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                ):(
                    <div className="h-full w-full flex items-center justify-center border border-[#00000038] rounded-t-xl">
                        <BiSolidCameraOff  style={{color: "gray", fontSize: "1.5rem"}}/>
                    </div>
                )}
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
                    <span></span>
                    <span>{product.stock} en stock</span>
                </div>

                <div className="mt-4 flex justify-between">
                    {user && user.role === 'seller' ? (
                        <>
                            <ButtonWithIcon
                                icon={<FaPencilAlt style={{color: 'white'}}/>}
                                text="Editar"
                                onClick={()=> onButtonClick(product, true)}/>
                            <ButtonWithIcon buttonColor="bg-rose-700 hover:bg-rose-800"
                                icon={<FaTrashAlt style={{color: 'white'}}/>}
                                text="Eliminar"
                                onClick={()=> onRemoveItem(product)}/>
                        </>
                    ) : user && user.role === 'admin' ? <></> : (
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