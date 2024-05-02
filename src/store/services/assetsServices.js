const assetsServices = builder => ({
  uploadImage: builder.mutation({
    query: body => ({
      url: `/assets/images`,
      method: "POST",
      body,
    }),
  }),
});

export default assetsServices;
