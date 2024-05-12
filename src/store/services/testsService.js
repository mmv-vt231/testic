const testsService = builder => ({
  getTests: builder.query({
    query: id => `/topics/${id}/tests`,
    providesTags: ["Tests"],
  }),
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
    invalidatesTags: ["Topics", "Tests"],
  }),
  editTest: builder.mutation({
    query: ({ id, body }) => ({
      url: `/tests/${id}`,
      method: "PUT",
      body,
    }),
    invalidatesTags: ["Topics", "Tests", "Test"],
  }),
  deleteTest: builder.mutation({
    query: id => ({
      url: `/tests/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Topics", "Tests"],
  }),
});

export default testsService;
