import {createSelector} from '@reduxjs/toolkit';

const userState = (state: any) => state.user;

export const userData = createSelector(
    [userState],
    (state) => ({
        user: state.user,
        token: state.token,
    })
)