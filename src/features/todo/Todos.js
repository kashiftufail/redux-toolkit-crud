import React from 'react';
import { useSelector } from 'react-redux';

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  // todos comes from the reducer attribute name 
  // in configureStore

  return (
    <div>
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.text}>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
