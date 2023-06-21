import React from 'react';
import { useCreatePostMutation } from '../services/postServiceApi';
import { useState } from 'react';

export default function NewPost() {
  const [createPost, { isLoading }] = useCreatePostMutation();
  const [newTitle, setNewTitle] = useState('')

  const [newContent, setNewContent] = useState('')

  function submitPost(event) {
    event.preventDefault();
    createPost({title: newTitle, content: newContent});    
    setNewTitle('')
    setNewContent('')    
  }

  return (
    <form onSubmit={(e) => submitPost(e)}>
      <h3>New Album</h3>
      <div>
        {/* <label htmlFor='title'>Title:</label>{' '} */}
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
          value='Add New Post' 
          disabled={isLoading}   
        />
        {isLoading && ' Loading...'}
      </div>
    </form>
  );
}