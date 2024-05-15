import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "@store/features/auth/authSlice";
import { API_URL } from "@config/constants";

import topicsService from "./topicsService";
import testsService from "./testsService";
import questionsService from "./questionsService";
import testingService from "./testingService";
import groupsService from "./groupsService";
import studentsService from "./studentsService";
import profileService from "./profileService";
import assetsService from "./assetsService";
import tasksService from "./tasksService";

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
  tagTypes: [
    "Topics",
    "Topic",
    "Groups",
    "Group",
    "Test",
    "Tasks",
    "Task",
    "User",
    "Gradebook",
    "Result",
    "ResultQuestion",
  ],
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
    ...topicsService(builder),
    ...testsService(builder),
    ...tasksService(builder),
    ...questionsService(builder),
    ...testingService(builder),
    ...groupsService(builder),
    ...studentsService(builder),
    ...profileService(builder),
    ...assetsService(builder),
  }),
});

export const {
  useAuthorizeQuery,

  useGetTopicsQuery,
  useGetTopicQuery,
  useAddTopicMutation,
  useEditTopicMutation,
  useDeleteTopicMutation,

  useGetTestsQuery,
  useGetTestQuery,
  useAddTestMutation,
  useEditTestMutation,
  useDeleteTestMutation,

  useGetTasksQuery,
  useGetTaskQuery,
  useGetTaskStartInfoQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,

  useAddQuestionMutation,
  useEditQuestionMutation,
  useDeleteQuestionMutation,

  useGetResultQuery,
  useStartTestingMutation,
  useGetQuestionQuery,
  useAddAnswerMutation,
  useFinishTestingMutation,
  useGetTimeQuery,
  useDeleteResultMutation,

  useGetGroupsQuery,
  useGetGroupQuery,
  useAddGroupMutation,
  useEditGroupMutation,
  useDeleteGroupMutation,
  useGetGroupResultsQuery,

  useAddStudentMutation,
  useEditStudentMutation,
  useDeleteStudentMutation,

  useEditUserDataMutation,
  useEditUserPasswordMutation,

  useUploadImageMutation,
  useDeleteImageMutation,
} = api;
