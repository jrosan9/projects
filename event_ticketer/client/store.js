import { configureStore } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import categorySlice from "./slices/categorySlice";
import eventSlice from "./slices/eventSlice";
import venueSlice from "./slices/venueSlice";

const store = configureStore({
  reducer: {
    categories: categorySlice,
    events: eventSlice,
    venue: venueSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
