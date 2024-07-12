import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const venueSlice = createSlice({
  name: "events",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllVenues.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getSingleVenue.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default venueSlice.reducer;
