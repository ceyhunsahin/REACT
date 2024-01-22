import { configureStore} from "@reduxjs/toolkit"

import todoReducerNext from "./reducer/todoReducer"
//  counterSlice.reducer ile reducer'dan gonderileni boyle yakaladim

export const Store = configureStore({
    reducer: {
        todo: todoReducerNext, // ben todoRed'dan aldigim deger, counterSlice.reducer ile gonderilen
    }
    
} )