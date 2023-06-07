import { createSlice } from '@reduxjs/toolkit';

export const changeScreenSlice = createSlice({
	name: 'changeScreen',
    initialState: 'SendMoney',
    reducers: {
        setChangeScreen: (state, action) => {
            return action.payload;
        }
    }
})

export const { setChangeScreen } = changeScreenSlice.actions;

export default changeScreenSlice.reducer;