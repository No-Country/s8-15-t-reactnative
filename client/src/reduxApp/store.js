import { configureStore } from '@reduxjs/toolkit'
import MyDataReducer from './feature/myCryptoDataSlice'

export const store = configureStore({
  reducer: {
    myCryptoData: MyDataReducer
  },
})