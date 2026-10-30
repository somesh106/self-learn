import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonSlice";
import authReducer from "./authSlice";


//central store for Redux like Context
export const store = configureStore({
    reducer: {
        common: commonReducer,              //it store a part of state with "common" name
        auth: authReducer
    },
});



// state.common   // products, cart, wishlist, search
// state.auth     // userInfo, token