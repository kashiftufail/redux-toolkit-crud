import React from 'react';
import { useGetSinglePostQuery, useUpdatePostMutation } from '../services/postServiceApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader'

export default function UpdatePost() {
  const { id } = useParams();

  const [updatePost] = useUpdatePostMutation();  
  
  const {
    data: post ,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetSinglePostQuery(id)

  
  const [newTitle, setNewTitle] = useState('')

  const [newContent, setNewContent] = useState('')  
  
  useEffect(() => {
    setNewTitle(post?.title)     
    setNewContent(post?.content)     
  }, [post]); 

  
  if (isLoading || isFetching) {
    return <div><Loader /></div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }  
  
  function submitPost(event) {
    event.preventDefault();
    updatePost({title: newTitle, content: newContent, id: id});    
    setNewTitle('')
    setNewContent('')    
  }

  return (
    <form onSubmit={(e) => submitPost(e)}>
      <h3>Update Post</h3>
      <div>
        
        <input
                    type="text"
                    id="title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter title"
        />
        <textarea
        name="content"
        
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        rows={4}
        cols={40}
      />
        
        
      </div>

      <br />

      <div>
        <input type='submit' 
          value='Update' 
          disabled={isLoading}   
        />
        {isLoading && ' Loading...'}
      </div>
    </form>
  );
}