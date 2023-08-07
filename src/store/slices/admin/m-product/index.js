import { createSlice } from "@reduxjs/toolkit";

import { getProductList } from "./slices"

const INITIAL_STATE = {
    productList : [],
    totalPages : 1,
    currentPage : 1,
    isGetProductListLoading : false,
}

const adminProductSlice = createSlice({
    name : "adminProduct",
    initialState : INITIAL_STATE,
    extraReducers : {
        [getProductList.pending] : (state, action) => {
            state.isGetProductListLoading = true            
        },
        [getProductList.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isGetProductListLoading : false,
                productList : action.payload?.result,
                totalPages : action.payload?.totalPages,
                currentPage : action.payload?.currentPage

            })
        },
        [getProductList.rejected] : (state, action) => {
            state.isGetProductListLoading = false
        },
    }
})

export default adminProductSlice.reducer