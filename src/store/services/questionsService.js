const questionsService = builder => ({
  addQuestion: builder.mutation({
    query: ({ id, body }) => ({
      url: `/tests/${id}/questions`,
      method: "POST",
      body,
    }),
    invalidatesTags: ["Test"],
  }),
  editQuestion: builder.mutation({
    query: ({ id, body }) => ({
      url: `/questions/${id}`,
      method: "PUT",
      body,
    }),
    invalidatesTags: ["Test"],
  }),
  deleteQuestion: builder.mutation({
    query: id => ({
      url: `/questions/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Test"],
  }),
});

export default questionsService;
