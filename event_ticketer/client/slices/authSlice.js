import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api.js";

function storeToken(state, { payload }) {
  const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      token: null,
    },
    reducers: {
      login: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      },
      logout: (state) => {
        state.user = null;
        state.token = null;
      },
    },
    extraReducers: (builder) => {
      builder.addMatcher(
        api.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
        }
      );
      builder.addMatcher(
        api.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
        }
      );
    },
  });
}
