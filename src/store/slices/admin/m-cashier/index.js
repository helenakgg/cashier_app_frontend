import { createSlice } from "@reduxjs/toolkit";
import {
    getAllCashiers,
    getAllDisabledCashiers,
    createCashier,
    getCashierById,
} from "./slices";

const INITIAL_STATE = {
    isGetAllCashiersLoading: false,
    isGetAllDisabledCashiersLoading: false,
    isCreateCashierLoading: false,
    isGetCashierByIdLoading: false,
    data : [],
    cashiers : [],
};

const adminCashierSlice = createSlice({
    name: "adminCashier",
    initialState: INITIAL_STATE,
    extraReducers: {
        [getAllCashiers.pending] : (state, action) => {
            state.isGetAllCashiersLoading = true            
        },
        [getAllCashiers.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isGetAllCashiersLoading : false,
                cashiers : action.payload,
            })
        },
        [getAllCashiers.rejected] : (state, action) => {
            state.isGetAllCashiersLoading = false
        },
        
    }
  
  
  
  
});

export default adminCashierSlice.reducer;