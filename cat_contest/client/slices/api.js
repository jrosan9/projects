import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { UseSelector } from "react-redux";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getAllCats: builder.query({
      query: () => "/cats",
    }),
    getAllCatsById: builder.query({
      query: (id) => "/cats/" + id,
    }),
    new_cat: builder.mutation({
      query: (cat) => ({
        url: "/cats",
        method: "POST",
        body: cat,
      }),
    }),
  }),
});

export const {
  useGetAllCatsQuery,
  useGetAllCatsByIdQuery,
  useNew_catMutation,
} = api;
