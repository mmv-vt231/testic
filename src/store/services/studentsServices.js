const studentsServices = builder => ({
  addStudent: builder.mutation({
    query: ({ id, body }) => ({
      url: `/groups/${id}/students`,
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

export default studentsServices;
