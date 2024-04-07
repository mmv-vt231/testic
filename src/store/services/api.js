import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "@store/features/auth/authSlice";
import { API_URL } from "@config/constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: builder => ({
    authorize: builder.query({
      query: () => "/auth/authorize",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;

          if (response.data) {
            dispatch(setCredentials(response.data));
          }
        } catch (e) {}
      },
    }),
  }),
});

export const { useAuthorizeQuery } = api;
