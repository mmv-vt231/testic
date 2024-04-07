import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, authorizeUser } from "./authActions";

const token = localStorage.getItem("token") || null;

const initialState = {
  token,
  userData: null,
  isAuthorized: false,
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userData = payload;
      state.isAuthorized = true;
    },
    logout: state => {
      state.isAuthorized = false;
      state.userData = null;
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.success = false;
        state.error = null;
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(loginUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        state.userData = payload.user;
        state.isAuthorized = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isAuthorized = false;
      });

    builder
      .addCase(authorizeUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(authorizeUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData = payload;
        state.isAuthorized = true;
      })
      .addCase(authorizeUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
