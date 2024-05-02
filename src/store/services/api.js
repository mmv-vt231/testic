import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "@store/features/auth/authSlice";
import { API_URL } from "@config/constants";

import topicsServices from "./topicsServices";
import testsServices from "./testsServices";
import questionsServices from "./questionsServices";
import groupsServices from "./groupsServices";
import studentsServices from "./studentsServices";
import profileServices from "./profileServices";
import assetsServices from "./assetsServices";

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
  tagTypes: ["Topics", "Topic", "Groups", "Group", "Test", "User"],
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
      providesTags: ["User"],
    }),
    ...topicsServices(builder),
    ...testsServices(builder),
    ...questionsServices(builder),
    ...groupsServices(builder),
    ...studentsServices(builder),
    ...profileServices(builder),
    ...assetsServices(builder),
  }),
});

export const {
  useAuthorizeQuery,

  useGetTopicsQuery,
  useGetTopicQuery,
  useAddTopicMutation,
  useEditTopicMutation,
  useDeleteTopicMutation,

  useGetTestQuery,
  useAddTestMutation,
  useEditTestMutation,
  useDeleteTestMutation,

  useAddQuestionMutation,
  useEditQuestionMutation,
  useDeleteQuestionMutation,

  useGetGroupsQuery,
  useGetGroupQuery,
  useAddGroupMutation,
  useEditGroupMutation,
  useDeleteGroupMutation,

  useAddStudentMutation,
  useEditStudentMutation,
  useDeleteStudentMutation,

  useEditUserDataMutation,
  useEditUserPasswordMutation,

  useUploadImageMutation,
} = api;
