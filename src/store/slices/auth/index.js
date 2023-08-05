import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  keepLogin,
  logout,
} from "./slices";

// @import schema validation

const INITIAL_STATE = {
  isLoginLoading: false,
  isKeepLoginLoading: false,
  isLogoutLoading: false,
  userId: null,
  uuid: null,
  username: "",
  email: "",
  profileImg: null,
  isDisable: false,
  role: "",
  error: null,
};

// global error handler
export const isErrorOccured = (action) => {
  return action.type.endsWith("rejected");
};

// auth success
const isAuthSuccess = (action) => {
  return [
    login.fulfilled.type,
    keepLogin.fulfilled.type
  ].includes(action.type);
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoginLoading = true;
      })

      .addCase(keepLogin.pending, (state, action) => {
        state.isKeepLoginLoading = true;
      })

      .addCase(logout.pending, (state, action) => {
        state.isLogoutLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state = Object.assign(state, INITIAL_STATE);
      })

      // auth success handler
      .addMatcher(isAuthSuccess, (state, action) => {
        state.isKeepLoginLoading = false;
        state.isLoginLoading = false;
        state.userId = action.payload?.userId;
        state.uuid = action.payload?.uuid;
        state.username = action.payload?.username;
        state.email = action.payload?.email;
        state.profileImg = action.payload?.profileImg;
        state.role = action.payload?.role;
      })

      // error handler
      .addMatcher(isErrorOccured, (state, action) => {
        state.isKeepLoginLoading = false;
        state.isLoginLoading = false;
        state.isLogoutLoading = false;
        state.error = action.payload;
        // console.error(action.payload);
      });
  },
});

export default authSlice.reducer;