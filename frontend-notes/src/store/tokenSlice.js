import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
    name: 'valueToken',
    initialState: {
        statusValue: "",
        token:""
    },
    reducers: {
        setStatus: (state, action) => {
            state.statusValue = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
    }
});
export const { setStatus ,setToken} = tokenSlice.actions;

export default tokenSlice.reducer;