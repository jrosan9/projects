import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const catSlice = createSlice({
  name: "cats",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllCats.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getAllCatsById.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.new_cat.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default catSlice.reducer;
