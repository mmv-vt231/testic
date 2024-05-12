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
    invalidatesTags: ["Result"],
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
    invalidatesTags: ["ResultQuestion"],
  }),
  finishTesting: builder.mutation({
    query: id => ({
      url: `/testing/${id}/finish`,
      method: "POST",
    }),
    invalidatesTags: ["Result"],
  }),
  getTime: builder.query({
    query: id => `/testing/${id}/time`,
  }),
  deleteResult: builder.mutation({
    query: id => ({
      url: `/testing/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Result"],
  }),
});

export default testingService;
