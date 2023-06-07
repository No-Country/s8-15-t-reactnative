import { configureStore } from '@reduxjs/toolkit'
import MyDataReducer from './feature/myCryptoDataSlice'
import transferDataSlice from './feature/transferDataSlice'
import changeScreenSlice from './feature/changeScreenSlice'

export const store = configureStore({
  reducer: {
    myCryptoData: MyDataReducer,
    transferData: transferDataSlice,
    changeScreen: changeScreenSlice
  },
})