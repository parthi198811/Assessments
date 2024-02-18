import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

export const UserProfileSlice = createSlice({
  name: 'userprofile',
  initialState: {
    data: {},
    isFetching: false,
    failure: false,
    errorMessage: undefined,
  },

  reducers: {
    removeProfile: state => {
      state.data = {};
    },
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
      state.failure = false;
      state.errorMessage = undefined;
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
      state.data = {};

      Alert.alert(state.errorMessage.message);
    },
  },
});

export const {removeProfile, request, success, failure} =
  UserProfileSlice.actions;

export default UserProfileSlice.reducer;
