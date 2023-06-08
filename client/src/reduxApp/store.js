import { configureStore } from '@reduxjs/toolkit'
import MyDataReducer from './feature/myCryptoDataSlice'
import transferDataSlice from './feature/transferDataSlice'
import changeScreenSlice from './feature/changeScreenSlice'
import userSlice from './feature/userSlice'
import authSlice from './feature/authSlice'

export const store = configureStore({
  reducer: {
    myCryptoData: MyDataReducer,
    transferData: transferDataSlice,
    changeScreen: changeScreenSlice,
    user: userSlice,
    auth: authSlice,
  },
})