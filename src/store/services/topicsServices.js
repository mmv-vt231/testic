const topicsServices = builder => ({
  getTopics: builder.query({
    query: () => "/user/topics",
    providesTags: ["Topics"],
  }),
  addTopic: builder.mutation({
    query: body => ({
      url: "/user/topics",
      method: "POST",
      body,
    }),
    invalidatesTags: ["Topics"],
  }),
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
});

export default topicsServices;
