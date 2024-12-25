import { configureStore } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import catSlice from "./slices/catSlice";
import authSlice from "./slices/authSlice";
import voteSlice from "./slices/voteSlice";

const store = configureStore({
  reducer: {
    cats: catSlice,
    auth: authSlice,
    votes: voteSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
