import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetSinglePostQuery } from '../services/postServiceApi';
import Loader from './Loader';

const Post = () => {

  const { id } = useParams();

  const { data } = useGetSinglePostQuery(id)
  
  const {
    data: post ,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetSinglePostQuery(id)

  if (isLoading || isFetching) {
    return <div><Loader /></div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }


  return (
    <>
    <br/><br/>
    <h5>Title: {post?.title}</h5>
    <p>{post?.body}</p>
    </>
  )
  
}

export default Post