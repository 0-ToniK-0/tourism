import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice1'; 

const store = configureStore({
  reducer: {
    user: userReducer, 
  },
});

export default store;
