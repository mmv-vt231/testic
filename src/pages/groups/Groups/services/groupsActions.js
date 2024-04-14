const groupsActions = builder => ({
  getGroups: builder.query({
    query: () => "/user/groups",
    providesTags: ["Groups"],
  }),
  addGroup: builder.mutation({
    query: body => ({
      url: "/user/groups",
      method: "POST",
      body,
    }),
    invalidatesTags: ["Groups"],
  }),
});

export default groupsActions;
