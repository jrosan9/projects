import { configureStore } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import categorySlice from "./slices/categorySlice";
import eventSlice from "./slices/eventSlice";
import venueSlice from "./slices/venueSlice";
import authSlice from "./slices/authSlice";
import reviewSlice from "./slices/reviewSlice";

const store = configureStore({
  reducer: {
    categories: categorySlice,
    events: eventSlice,
    venue: venueSlice,
    auth: authSlice,
    Reviews: reviewSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
