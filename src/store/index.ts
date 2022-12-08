import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'

const store = configureStore({
  reducer: countReducer,
})

export default store
