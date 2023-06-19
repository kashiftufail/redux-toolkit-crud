import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postServerApi = createApi({
  reducerPath: 'postServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1) => `api/v1/posts?_page=${page}&_limit=10`,
    }),
  }),
});

export const { useGetPostsQuery } = postServerApi;