import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5050/",
    // prepareHeaders: (headers, { getState }) => {
    //   const credentials = window.sessionStorage.getItem("CREDENTIALS");
    //   const parsedCredentials = JSON.parse(credentials || "{}");
    //   console.log(parsedCredentials);
    //   if (token) {
    //     headers.set("Authorization", token);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: () => "api/categories",
    }),
    getAllEvents: build.query({
      query: () => "api/events",
    }),
    getSingleEvent: build.query({
      query: (id) => "api/events" + id,
    }),
    getAllVenues: build.query({
      query: () => "api/venues",
    }),
    getSingleVenue: build.query({
      query: (id) => "api/venues" + id,
    }),
    login: build.mutation({
      query: (cred) => ({
        url: "auth/login",
        method: "POST",
        body: cred,
      }),
    }),
    register: build.mutation({
      query: (cred) => ({
        url: "auth/register",
        method: "POST",
        body: cred,
      }),
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetAllEventsQuery,
  useGetSingleEventQuery,
  useGetAllVenuesQuery,
  useGetSingleVenueQuery,
  useLoginMutation,
  useRegisterMutation,
} = api;
