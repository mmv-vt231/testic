const groupsActions = builder => ({
  getGroups: builder.query({
    query: () => "/groups",
    providesTags: ["Groups"],
  }),
  addGroup: builder.mutation({
    query: body => ({
      url: "/groups",
      method: "POST",
      body,
    }),
    invalidatesTags: ["Groups"],
  }),
});

export default groupsActions;
