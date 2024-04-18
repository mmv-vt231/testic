const topicsActions = builder => ({
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
});

export default topicsActions;
