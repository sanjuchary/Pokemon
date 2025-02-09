import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  userDetails: {},
  error: {},
  progress: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userDetails = action.payload.userDetails;
      state.error = {};
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userDetails = {};
      state.error = {};
    },
  },
});

export const {
  // loginRequest,
  loginSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
