import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const Initial_State = {
    value: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState: Initial_State,
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        reset: (state) => {
            state.value  = 0
          },
    },
})

export const { increment, decrement, reset } = counterSlice.actions
// bunlari Counter.js'e yolluyorum o dispatch edip yakalayacak

export default counterSlice.reducer // bunu store'a