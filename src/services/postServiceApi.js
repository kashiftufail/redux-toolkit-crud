import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postServerApi = createApi({
  reducerPath: 'postServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1) => '/posts',
    }),
    getSinglePost: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetSinglePostQuery } = postServerApi;