import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      console.log("Reducer action payload:", action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      //   localStorage.setItem("authToken", action.payload.token);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        localStorage.setItem("authToken", payload.token);
      }
    );
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
