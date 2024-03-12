import { configureStore } from '@reduxjs/toolkit'
import StatusReducer from './tokenSlice'

const store = configureStore({
  reducer:{

    reducer: StatusReducer,
  }
})

export default store