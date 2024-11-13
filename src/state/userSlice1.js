import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  isLoggedIn: false, // New property for login status
};

const userSlice1 = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    logIn: (state, action) => {
      state.isLoggedIn = true; // Set to true when logged in
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    logOut: (state) => {
      state.isLoggedIn = false; // Set to false when logged out
      state.name = '';
      state.lastName = '';
      state.email = '';
    },
  },
});

export const { setUserData, logIn, logOut } = userSlice1.actions;
export default userSlice1.reducer;
