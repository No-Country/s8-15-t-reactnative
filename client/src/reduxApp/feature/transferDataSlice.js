import { createSlice } from '@reduxjs/toolkit';

export const transferDataSlice = createSlice({
	name: 'transferData',
    initialState: [],
    reducers: {
        setTransferData: (state, action) => {
            return action.payload;
        }
    }
})

export const { setTransferData } = transferDataSlice.actions;

export default transferDataSlice.reducer;