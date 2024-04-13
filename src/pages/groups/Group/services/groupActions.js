const groupActions = builder => ({
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
});

export default groupActions;
