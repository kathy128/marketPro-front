import {Transition} from '@headlessui/react';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart, resetCart, toggleCart} from '../../store/slices/cartSlice';
import type {AppDispatch} from '../../store/configStore';
import {cartDisplay} from '../../store/selectors/cartSelector';
import React from 'react';
import {FaCartPlus, FaTrash} from 'react-icons/fa';
import {BsFillXCircleFill, BsTrash3Fill} from 'react-icons/bs';
import ButtonWithIcon from '../button';
import {useNavigate} from 'react-router-dom';
import {userData} from '../../store/selectors/userSelector';
import {BiSolidCameraOff} from 'react-icons/bi';

const CartModal = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {isOpen, items} = useSelector(cartDisplay);
    const {user} = useSelector(userData);
    if (!isOpen) return null;
    return (
        <Transition show={isOpen}>
            <div>
                <Transition.Child
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-50"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-50"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 backdrop-blur-sm bg-gray-700/80 z-50"
                        onClick={() => dispatch(toggleCart())}
                    />
                </Transition.Child>
                <Transition.Child
                    enter="transition transform duration-300"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition transform duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div className="fixed top-0 right-0 w-100 h-full bg-white shadow-lg z-50 p-4 overflow-hidden">
                        <div className="flex justify-between items-center mb-4 border-b-4 border-gray-300 pb-4 border-b-[2px]">
                            <h2 className="text-xl font-bold text-sky-700">Carrito</h2>
                            <button onClick={() => dispatch(toggleCart())} className="text-gray-500 text-xl"><BsFillXCircleFill style={{color: "#0069A8"}} /></button>
                        </div>
                        {items.length === 0 ?
                            (
                                <div className="flex flex-col items-center gap-2 pt-4">
                                    <div className="bg-gray-100 flex items-center justify-center rounded rounded-full w-[4rem] h-[4rem] ">
                                        <FaCartPlus style={{color: 'gray', fontSize: "1.5rem"}}/>
                                    </div>
                                    <p className="text-lg">Aún no tienes productos en tu carrito</p>
                                </div>
                            ):(
                                <div className="relative flex flex-col mb-4 gap-4">
                                    {items.map((product) => {
                                        return <div key={product.id} className="flex gap-4 p-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-white rounded-lg shadow-md transition duration-300">
                                            <div className="w-20">
                                                {product.image ?
                                                        <img src={product.image} alt={product.name}></img>
                                                    :
                                                    <div className="h-full w-full flex items-center justify-center border border-[#00000038] rounded-xl">
                                                        <BiSolidCameraOff  style={{color: "gray", fontSize: "1.5rem"}}/>
                                                    </div>
                                                }
                                            </div>
                                            <div className="flex flex-col justify-between flex-1">
                                                <h3 className="font-bold text-lg text-sky-700 overflow-hidden text-ellipsis whitespace-nowrap">{product.name}</h3>
                                                <span className="text-sky-700 font-bold">Precio: <span className="text-sky-700 font-normal">${product.price.toFixed(2)}</span></span>
                                                <span className="text-sky-700 font-bold">Cantidad: <span className="text-sky-700 font-normal">{product.quantity}</span></span>
                                            </div>
                                            <FaTrash style={{
                                                cursor: "pointer",
                                                color: "#0284C7",
                                                fontSize: "1.5rem",
                                                alignSelf: "center",
                                            }} onClick={() => {
                                                dispatch(removeFromCart(product))
                                            }}/>
                                        </div>
                                    })}
                                </div>
                            )
                        }
                        <div className="mt-6 absolute bottom-0 pb-6 flex flex-col justify-center items-center w-full gap-4">
                            {items.length > 0 && (
                                <>
                                    <div className="w-[80%]">
                                        <ButtonWithIcon
                                                        icon={<BsTrash3Fill style={{color: "#808080", fontSize: "1rem"}}/>}
                                                        text="Vaciar carrito"
                                                        buttonType="buttonTrash"
                                                        className="bg-gray-100 w-full"
                                                        onClick={() => {
                                                            dispatch(resetCart())
                                                        }}
                                        />
                                    </div>
                                    { user ? (
                                        <button onClick={() => {}}
                                            className="bg-green-400 text-[1rem] w-[80%] font-bold rounded-[7px] text-white px-4 py-2 rounded hover:bg-green-600">
                                            Ir a pagar
                                        </button>
                                    ) : (
                                        <p className="text-lg text-gray-600">
                                            Debes <a onClick={() => navigate("/login")} className="underline font-medium cursor-pointer">iniciar sesión</a> para pagar.
                                        </p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Transition>
    );
};
export default CartModal;