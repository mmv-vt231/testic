import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "@store/features/auth/authSlice";
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
  tagTypes: ["Groups", "Group"],
  endpoints: builder => ({
    authorize: builder.query({
      query: () => "/auth/authorize",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;

          if (response.data) {
            dispatch(setCredentials(response.data));
          }
        } catch (e) {
          dispatch(logout());
        }
      },
    }),
    getGroups: builder.query({
      query: () => "/groups",
      providesTags: ["Groups"],
    }),
    getGroup: builder.query({
      query: id => `/groups/${id}`,
      providesTags: ["Group"],
    }),
    addGroup: builder.mutation({
      query: body => ({
        url: "/groups",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Groups"],
    }),
    editGroup: builder.mutation({
      query: ({ id, body }) => ({
        url: `/groups/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Group"],
    }),
    deleteGroup: builder.mutation({
      query: id => ({
        url: `/groups/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Groups"],
    }),
    addStudent: builder.mutation({
      query: body => ({
        url: "/students",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Group"],
    }),
    editStudent: builder.mutation({
      query: ({ id, body }) => ({
        url: `/students/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Group"],
    }),
    deleteStudent: builder.mutation({
      query: id => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Group"],
    }),
  }),
});

export const {
  useAuthorizeQuery,
  useGetGroupsQuery,
  useGetGroupQuery,
  useAddGroupMutation,
  useEditGroupMutation,
  useDeleteGroupMutation,
  useAddStudentMutation,
  useEditStudentMutation,
  useDeleteStudentMutation,
} = api;
