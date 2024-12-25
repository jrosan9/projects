import { configureStore } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import catSlice from "./slices/catSlice";

const store = configureStore({
  reducer: {
    cats: catSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
