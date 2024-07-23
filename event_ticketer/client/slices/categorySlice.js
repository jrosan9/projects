import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllCategories.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getCategoryById.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default categoriesSlice.reducer;
