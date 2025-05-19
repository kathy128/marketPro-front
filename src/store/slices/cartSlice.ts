import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

interface Product{
    id: number,
    sku: string,
    name: string,
    price: number,
    category: string,
    rating: number,
    image: string,
    featured: boolean,
    stock: number
}

interface CartState {
    items: Product[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                toast.info(
                    `El producto ${action.payload.name} ya está en el carrito.`
                );
            } else {
                try {
                    state.items.push({ ...action.payload, quantity: 1 });
                } catch (error) {
                    toast.error(`No se pudo agregar ${action.payload.name} al carrito.`);
                }
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        toggleCart(state) {
            state.isOpen = !state.isOpen;
        },
        resetCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, toggleCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;