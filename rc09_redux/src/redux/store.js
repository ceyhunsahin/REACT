import { configureStore} from "@reduxjs/toolkit"

import ceyhunReducer from "./Reducer"
//  counterSlice.reducer ile reducer'dan gonderileni boyle yakaladim

export const Store = configureStore({
    reducer: {
        counters: ceyhunReducer, // benim counters'dan anladigim counterSlice.reducer ile gonderilen
    }
    
} )