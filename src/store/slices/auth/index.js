import { createSlice } from "@reduxjs/toolkit";
import {
    login,
    keepLogin,
    logout,
    forgotPassword,
    resetPassword,
} from "./slices";

const INITIAL_STATE = {
    isLoginLoading: false,
    isKeepLoginLoading: false,
    isLogoutLoading: false,
    isForgotPasswordLoading: false,
    isResetPasswordLoading: false,
    userId: null,
    uuid: null,
    username: "",
    email: "",
    profileImg: null,
    isDisable: false,
    role: 0
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    extraReducers: {
        [login.pending] : (state, action) => {
            state.isLoginLoading = true            
        },
        [login.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isLoginLoading : false,
                userId : action.payload?.userId,
                uuid : action.payload?.uuid,
                username : action.payload?.username,
                email : action.payload?.email,
                profileImg : action.payload?.profileImg,
                isDisable : action.payload?.isDisable,
                role : action.payload?.role
            })
        },
        [login.rejected] : (state, action) => {
            state.isLoginLoading = false
        },
        [keepLogin.pending] : (state, action) => {
            state.isKeepLoginLoading = true
        },
        [keepLogin.fulfilled] : (state, action) => {
            state = Object.assign(state,{
                isKeepLoginLoading : false,
                userId : action.payload?.userId,
                uuid : action.payload?.uuid,
                username : action.payload?.username,
                email : action.payload?.email,
                profileImg : action.payload?.profileImg,
                isDisable : action.payload?.isDisable,
                role : action.payload?.role
            })
        },
        [keepLogin.rejected] : (state, action) => {
            state.isKeepLoginLoading = false
        },
        [logout.pending] : (state, action) => {
            state.isLogoutLoading = true
        },
        [logout.fulfilled] : (state, action) => {
            state = Object.assign(state, INITIAL_STATE)
        },
        [logout.rejected] : (state, action) => {
            state.isLogoutLoading = false
        },
        [forgotPassword.pending] : (state, action) => {
            state.isForgotPasswordLoading = true
        },
        [forgotPassword.fulfilled] : (state, action) => {
            state.isForgotPasswordLoading = false
        },
        [forgotPassword.rejected] : (state, action) => {
            state.isForgotPasswordLoading = false
        },
        [resetPassword.pending] : (state, action) => {
            state.isResetPasswordLoading = true
        },
        [resetPassword.fulfilled] : (state, action) => {
            state.isResetPasswordLoading = false
        },
        [resetPassword.rejected] : (state, action) => {
            state.isResetPasswordLoading = false
        },
    }
  
  
  
  
});

export default authSlice.reducer;