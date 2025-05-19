import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserInfo(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        removeUserInfo(state) {
            state.user = null;
            state.token = null;
        },
    },
});

export const { addUserInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;