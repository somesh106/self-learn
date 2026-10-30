import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    products: [],
    allProduct: [],
    cartProduct: [],
    likedProduct: [],
    filterProduct: []
};

const commonSlice = createSlice({
    name: "common",                             //slice name
    initialState,
    reducers: {                                 //function that updates the state
        setSearch: (state, action) => {
            state.search = action.payload;      //value send by us from action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setAllProduct: (state, action) => {
            state.allProduct = action.payload;
        },
        setCartProduct: (state, action) => {
            state.cartProduct = action.payload;
        },
        setLikedProduct: (state, action) => {
            state.likedProduct = action.payload;
        },
        setFilterProduct: (state, action) => {
            state.filterProduct = action.payload;
        },
    },
});

export const { setSearch, setProducts, setLikedProduct, setCartProduct, setFilterProduct, setAllProduct
} = commonSlice.actions;
export default commonSlice.reducer;                 //export the reducer, registred in store