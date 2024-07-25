import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5050/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken");
      //   const token = useSelector((state) => state.auth.token);
      console.log(token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: () => "api/categories",
    }),
    getCategoryById: build.query({
      query: (id) => "api/categories/" + id,
    }),
    getAllEvents: build.query({
      query: () => "api/events",
    }),
    getTrendingEvents: build.query({
      query: () => "api/events/trending",
    }),
    getSingleEvent: build.query({
      query: (id) => "api/events/" + id,
    }),
    getEventsByCategoryId: build.query({
      query: (id) => "api/events/category/" + id,
    }),
    getAllVenues: build.query({
      query: () => "api/venues",
    }),
    getSingleVenue: build.query({
      query: (id) => "api/venues/" + id,
    }),
    getAllReviews: build.query({
      query: () => "api/reviews",
    }),
    getEventsByVenueId: build.query({
      query: (id) => "api/events/venue/" + id,
    }),
    getReviewsByVenueId: build.query({
      query: (id) => "api/reviews/venue/" + id,
    }),
    getReviewsByCustomerId: build.query({
      query: (id) => "api/reviews/customer/" + id,
    }),
    postReview: build.mutation({
      query: (review) => ({
        url: "api/reviews",
        method: "POST",
        body: review,
        responseHandler: (response) => response.text(),
      }),
    }),
    login: build.mutation({
      query: (cred) => ({
        url: "api/auth/login",
        method: "POST",
        body: cred,
      }),
    }),
    register: build.mutation({
      query: (cred) => ({
        url: "api/auth/register",
        method: "POST",
        body: cred,
      }),
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useGetReviewsByCustomerIdQuery,
  useGetReviewsByVenueIdQuery,
  usePostReviewMutation,
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetAllEventsQuery,
  useGetTrendingEventsQuery,
  useGetSingleEventQuery,
  useGetAllVenuesQuery,
  useGetEventsByCategoryIdQuery,
  useGetSingleVenueQuery,
  useGetEventsByVenueIdQuery,
  useLoginMutation,
  useRegisterMutation,
} = api;

// {
//     "venue_id":1,
//     "customer_id":1,
//     "Rating":2,
//     "description":"love"
// }
