import { useGetPostsQuery } from "../services/postServiceApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from './Loader';

import { useDeletePostMutation } from "../services/postServiceApi";

export default function Posts() {

  const [page, setPage] = useState(1);

  const [deletePost] = useDeletePostMutation()

  const {
    data: posts = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetPostsQuery(page);

  if (isLoading || isFetching) {
    return <div><Loader /></div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  
  return (
    <>
      <h1 className="a-center">  Posts </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>

          {posts?.map((post) => (
            <tr key={post.id}>
              <th scope="row">{post.id}</th>
              <td>              
                <Link to={`/posts/${post.id}`}> {post.title} </Link>
                
              </td>
              <td><Link to={`/posts/${post.id}/update`}> update Post </Link> | 
                  <Link to={'Javascript:;'} onClick={() => deletePost({id: post.id}) } > delete Post </Link>
              </td>

            </tr>
          ))}

        </tbody>
      </table>

      <div className="a-center">
        <button className="btn btn-danger"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <button className="btn btn-danger"
          disabled={posts.length < 10}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const Posts = () => {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Blog</h2>
//       <Outlet />
//     </div>
//   )
// }

// export default Posts

