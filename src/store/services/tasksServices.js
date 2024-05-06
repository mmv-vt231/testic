const tasksServices = builder => ({
    getTasks: builder.query({
        query: id => `/topics/${id}/tasks`,
        providesTags: ["Tasks"],
    }),
    getTask: builder.query({
      query: id => `/tasks/${id}`,
      providesTags: ["Task"],
    }),
    addTask: builder.mutation({
      query: ({ id, body }) => ({
        url: `/tests/${id}/tasks`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tasks"],
    }),
    editTask: builder.mutation({
      query: ({ id, body }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Tasks", "Task"],
    }),
    deleteTask: builder.mutation({
      query: id => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  });
  
  export default tasksServices;
  