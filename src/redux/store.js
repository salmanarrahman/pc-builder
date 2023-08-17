import { configureStore } from '@reduxjs/toolkit'
import jsonObjectsReducer from './dataSlice';


export const store = configureStore({
  reducer: {
    jsonObjects:jsonObjectsReducer
  },
})