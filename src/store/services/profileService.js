const profileService = builder => ({
  editUserPassword: builder.mutation({
    query: body => ({
      url: `/user/changePassword`,
      method: "PUT",
      body,
    }),
  }),
  editUserData: builder.mutation({
    query: body => ({
      url: "/user",
      method: "PUT",
      body,
    }),
    invalidatesTags: ["User"],
  }),
});

export default profileService;
