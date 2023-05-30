import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    id: 'bitcoin',
    coin: 'Bitcoin',
    amount: 0.00004243,
    symbol: 'BTC',
    actualValue: 11.46,
    modifiedPercentage: -17.3,
    imgIcon: 'https://i.imgur.com/20mz2yq.png',
    chartData: [
        { x: '01/01', y: 11.004243, label: '11.03' },
        { x: '01/02', y: 9.00004247, label: '9.42' },
        { x: '01/03', y: 5.00004245, label: '5.42' },
        { x: '01/05', y: 16.00004240, label: '16.41' },
        { x: '01/06', y: 15.00004238, label: '15.38' },
        { x: '01/07', y: 12.00004244, label: '12.44' },
        { x: '01/08', y: 11.00004243, label: '11.46' },
    ]
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
            state.chartData = payload.chartData;
        }
    }
})

export const { updateData } = myCryptoDataSlice.actions

export default myCryptoDataSlice.reducer