import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const reviewSlice = createSlice({
  name: "reviews",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllReviews.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getReviewsByVenueId.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getReviewsByCustomerId.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.postReview.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default reviewSlice.reducer;
