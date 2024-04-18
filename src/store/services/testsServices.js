const testsServices = builder => ({
  getTest: builder.query({
    query: id => `/tests/${id}`,
    providesTags: ["Test"],
  }),
  addTest: builder.mutation({
    query: ({ id, body }) => ({
      url: `/topics/${id}/tests`,
      method: "POST",
      body,
    }),
    invalidatesTags: ["Topics", "Topic"],
  }),
  editTest: builder.mutation({
    query: ({ id, body }) => ({
      url: `/tests/${id}`,
      method: "PUT",
      body,
    }),
    invalidatesTags: ["Topics", "Topic", "Test"],
  }),
  deleteTest: builder.mutation({
    query: id => ({
      url: `/tests/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Topics", "Topic"],
  }),
});

export default testsServices;
