import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postServerApi = createApi({
  reducerPath: 'postServerApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Posts'],  
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1) => `api/v1/posts?_page=${page}&_limit=10`,
      providesTags: ['Posts'],
    }),
    getSinglePost: builder.query({
      query: (id) => `/posts/${id}`,      
    }),

    createPost: builder.mutation({
      query: (body) => ({
        
        url: 'api/v1/posts',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Posts'],

    }),
  }),
});

export const { useCreatePostMutation, useGetPostsQuery, useGetSinglePostQuery } = postServerApi;