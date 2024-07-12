import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const eventSlice = createSlice({
  name: "events",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllEvents.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getSingleEvent.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default eventSlice.reducer;
