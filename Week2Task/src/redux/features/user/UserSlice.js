import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {PersistentKeychainHelper} from '@helpers';
import {BUILD_NAME} from '@constants';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    isFetching: false,
    failure: false,
    errorMessage: undefined,
  },

  reducers: {
    logout: state => {
      state.data = {};
      PersistentKeychainHelper.resetInternetCredentials(BUILD_NAME);
    },
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;

      if (state.data.userId && state.data.ttl && state.data.id) {
        state.data.accessToken = action.payload.id;
      }

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

export const {logout, request, success, failure} = UserSlice.actions;

export default UserSlice.reducer;
