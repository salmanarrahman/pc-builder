// redux/jsonObjectsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jsonObjects : []
}

const jsonObjectSlice = createSlice({
    name: 'jsonObjects',
    initialState,
    reducers:{
        addJsonObject:(state,action) => {
            state.jsonObjects.push(action.payload)
        }
    }
})

export const {addJsonObject} = jsonObjectSlice.actions
export default jsonObjectSlice.reducer