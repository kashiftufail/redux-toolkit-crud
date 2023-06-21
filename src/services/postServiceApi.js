import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postServerApi = createApi({
  reducerPath: 'postServerApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Posts','Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1) => `api/v1/posts?_page=${page}&_limit=10`,
      providesTags: ['Posts'],
    }),
    getSinglePost: builder.query({
      query: (id) => `api/v1/posts/${id}`,
      providesTags: ['Post'],
    }),

    createPost: builder.mutation({
      query: (body) => ({

        url: 'api/v1/posts',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Posts'],

    }),

    updatePost: builder.mutation({
      query: (post) => ({
        url: `api/v1/posts/${post.id}`,
        method: 'PATCH',
        body: post
      }),
      invalidatesTags: ['Posts','Post']
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['Posts']
    }),

  }),
});

export const { useUpdatePostMutation, useDeletePostMutation, useCreatePostMutation, 
               useGetPostsQuery, useGetSinglePostQuery } = postServerApi;