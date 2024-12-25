import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:2000/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
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
    register: builder.mutation({
      query: (cred) => ({
        url: "/auth/register",
        method: "POST",
        body: cred,
      }),
    }),
    login: builder.mutation({
      query: (cred) => ({
        url: "/auth/login",
        method: "POST",
        body: cred,
      }),
    }),
    vote: builder.mutation({
      query: (vote) => ({
        url: "/vote",
        method: "POST",
        body: vote,
      }),
    }),
  }),
});

export const {
  useGetAllCatsQuery,
  useGetAllCatsByIdQuery,
  useNew_catMutation,
  useLoginMutation,
  useRegisterMutation,
  useVoteMutation,
} = api;
