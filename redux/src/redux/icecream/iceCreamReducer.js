
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    numOfIceCream : 20
}

export const iceCreamReducer = createSlice({
    name: 'iceCream',
    initialState:initialState,
    reducers: {
        buyIceCream: (state, action) => {
            state.numOfIceCream = state.numOfIceCream - 1
        }
    }
})

export const { buyIceCream } = iceCreamReducer.actions
export const selectCount = (state) => state.iceCream.numOfIceCream
export default iceCreamReducer.reducer;
