import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const voteSlice = createSlice({
  name: "votes",
  initialState: {
    votes: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.vote.matchFulfilled,
      (state, { payload }) => {
        state.votes.push(payload.vote);
      }
    );
  },
});

export default voteSlice.reducer;
