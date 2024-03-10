import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer';


const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer
    }});

console.log(store.getState());

export default store;