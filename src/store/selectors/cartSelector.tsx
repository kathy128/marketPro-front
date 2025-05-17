import type {RootState} from '../configStore';
import {createSelector} from '@reduxjs/toolkit';

const cartState = (state: RootState) => state.cart;

export const cartDisplay = createSelector(
    [cartState],
    (state) => ({
        isOpen: state.isOpen,
        items: state.items,
    }),
);