const topicActions = builder => ({
  getTopic: builder.query({
    query: id => `/topics/${id}`,
    providesTags: ["Topic"],
  }),
  editTopic: builder.mutation({
    query: ({ id, body }) => ({
      url: `/topics/${id}`,
      method: "PUT",
      body,
    }),
    invalidatesTags: ["Topic"],
  }),
  deleteTopic: builder.mutation({
    query: id => ({
      url: `/topics/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Topics"],
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
    invalidatesTags: ["Topics", "Topic"],
  }),
  deleteTest: builder.mutation({
    query: id => ({
      url: `/tests/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Topics", "Topic"],
  }),
});

export default topicActions;
