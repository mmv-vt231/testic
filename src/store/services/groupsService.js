const groupsService = builder => ({
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
  getGroup: builder.query({
    query: id => `/groups/${id}`,
    providesTags: ["Group"],
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
  getGroupResults: builder.query({
    query: id => `/groups/${id}/results`,
    providesTags: ["Group", "Gradebook"],
  }),
});

export default groupsService;
