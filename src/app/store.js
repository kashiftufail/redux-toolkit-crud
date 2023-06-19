import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

import { postServerApi } from "../services/postServiceApi";


// export default configureStore ({
  // reducer: {
    //  todos: todoReducer,}
  
  export const store =     configureStore ({
    reducer: {
      [postServerApi.reducerPath]: postServerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postServerApi.middleware),
  });
  
  setupListeners(store.dispatch);




// reducers
// middleware​?
// devTools​?
// preloadedState​?
// enhancers​?
