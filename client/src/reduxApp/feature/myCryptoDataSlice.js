import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    id: 'bitcoin',
    coin: 'Bitcoin',
    amount: 0.00004243,
    symbol: 'BTC',
    actualValue: 11.46,
    modifiedPercentage: -17.3,
    imgIcon: 'https://i.imgur.com/20mz2yq.png'
}


export const myCryptoDataSlice = createSlice({
    name: 'myCryptoData',
    initialState,
    reducers: {
        updateData: (state, action) => {
            const payload = action.payload;
            state.id = payload.id;
            state.coin = payload.coin;
            state.amount = payload.amount;
            state.symbol = payload.symbol;
            state.actualValue = payload.actualValue;
            state.modifiedPercentage = payload.modifiedPercentage;
            state.imgIcon = payload.imgIcon;
        }
    }
})

export const { updateData } = myCryptoDataSlice.actions

export default myCryptoDataSlice.reducer