import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    loggedInUser: null,
  },

  reducers: {
    login: (state, action) => {
      state.loggedInUser = action.payload;
    },
    logout: state => {
      state.loggedInUser = null;
    },
  },
});

export const {login, logout} = UserSlice.actions;

export default UserSlice.reducer;
