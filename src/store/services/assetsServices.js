const assetsServices = builder => ({
  uploadImage: builder.mutation({
    query: body => ({
      url: `/assets/images`,
      method: "POST",
      body,
    }),
  }),
  deleteImage: builder.mutation({
    query: body => ({
      url: `/assets/images`,
      method: "DELETE",
      body,
    }),
  }),
});

export default assetsServices;
