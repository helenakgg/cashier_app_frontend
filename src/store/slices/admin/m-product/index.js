import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-hot-toast";

// @import async thunk
import { getProductList } from "./slices"
import { isErrorOccured } from "../../auth";

const INITIAL_STATE = {
    productList : [],
    totalPages : 1,
    currentPage : 1,
    isLoading : false,
}

const adminProductSlice = createSlice({
    name : "products",
    initialState : INITIAL_STATE,
    extraReducers : builder => {
        builder.addCase(getProductList.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getProductList.fulfilled, (state, action) => {
            state.isLoading = false
            state.productList = action.payload?.result
            state.totalPages = action.payload?.page
            state.currentPage = action.payload?.productPage
        })
        builder.addMatcher(isErrorOccured, (state, action) => {
            state.isLoading = false
            
            // @console error
            console.error(action.payload)
            Toast.error(action.payload?.message || "Error : something went wrong.")
        })
    }
})

export default adminProductSlice.reducer