const testingService = builder => ({
  getResult: builder.query({
    query: id => `/testing/${id}/result`,
    providesTags: ["Result"],
  }),
  startTesting: builder.mutation({
    query: ({ id, body }) => ({
      url: `/tasks/${id}/start`,
      method: "POST",
      body,
    }),
    invalidatesTags: ["Result", "Task"],
  }),
  getQuestion: builder.query({
    query: id => `/testing/${id}/question`,
    providesTags: ["ResultQuestion"],
  }),
  addAnswer: builder.mutation({
    query: ({ id, body }) => ({
      url: `/testing/${id}/answer`,
      method: "POST",
      body,
    }),
    invalidatesTags: ["ResultQuestion", "Task", "Gradebook"],
  }),
  finishTesting: builder.mutation({
    query: id => ({
      url: `/testing/${id}/finish`,
      method: "POST",
    }),
    invalidatesTags: ["Result", "Task"],
  }),
  getTime: builder.query({
    query: id => `/testing/${id}/time`,
  }),
  deleteResult: builder.mutation({
    query: id => ({
      url: `/testing/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Result", "Test", "Task"],
  }),
});

export default testingService;
