import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "@store/features/auth/authSlice";
import { API_URL } from "@config/constants";

import topicsActions from "@pages/topics/services/topicsActions";
import groupsActions from "@pages/groups/Groups/services/groupsActions";
import groupActions from "@pages/groups/Group/services/groupActions";
import profileActions from "@pages/profile/services/profileActions";

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
  tagTypes: ["Topics", "Groups", "Group", "User"],
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
    ...topicsActions(builder),
    ...groupsActions(builder),
    ...groupActions(builder),
    ...profileActions(builder),
  }),
});

export const {
  useAuthorizeQuery,
  useGetTopicsQuery,
  useAddTopicMutation,
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
} = api;
