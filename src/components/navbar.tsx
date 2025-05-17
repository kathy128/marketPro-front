import React from 'react';
import {FaStore, FaSignInAlt, FaShoppingCart} from "react-icons/fa";
import ButtonWithIcon from './button';
import {toggleCart} from '../store/slices/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import type {AppDispatch} from '../store/configStore';
import {cartDisplay} from '../store/selectors/cartSelector';

const Navbar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {items} = useSelector(cartDisplay);
    let iconStyles = {color: "#0284C7", fontSize: "1.5rem"};
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2">
                    <FaStore style={iconStyles}/>
                    <span className="text-xl font-bold text-sky-700">MarketPro</span>
                </a>
                <div className="flex items-center gap-4">
                    <ButtonWithIcon buttonType="textButton"
                                    className="text-sky-700"
                                    href="/login"
                                    icon={<FaSignInAlt style={{color: "#0284C7", fontSize: "1rem"}}/>}
                                    text="Ingresar"
                    />
                    <div className="h-5 w-[1px] bg-[rgb(199,202,206)]"></div>

                    <div className="relative z-[0] cursor-pointer" onClick={() => dispatch(toggleCart())}>
                        <FaShoppingCart style={iconStyles}/>
                        {items.length > 0 &&
                            <>
                                <div
                                    className="z-[1] ring-[.5px] ring-green-500/30 border border-white absolute bottom-[-10px] right-[-10px] bg-green-500 radius rounded-full text-white font-bold w-[1.25rem] h-[1.25rem] justify-center items-center flex">
                                    <span className={items.length > 99 ? "text-[8px]" : "text-[10px]"}>{items.length > 99 ? "99+" : items.length}</span>
                                </div>
                                <div className="animate-[custom-ping_1s_cubic-bezier(0,0,0.2,1)_1] absolute bottom-[-10px] text-[8px] right-[-10px] bg-green-500 radius border-white rounded-full text-white font-bold w-[1.25rem] h-[1.25rem] justify-center flex"></div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

