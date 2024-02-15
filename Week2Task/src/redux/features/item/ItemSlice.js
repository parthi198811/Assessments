import {createSlice} from '@reduxjs/toolkit';

export const ItemSlice = createSlice({
  name: 'item',
  initialState: {
    items: [],
    isFetching: false,
    failure: false,
    errorMessage: undefined,
  },

  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.items = action.payload;
      state.failure = false;
      state.errorMessage = undefined;
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {request, success, failure} = ItemSlice.actions;

export default ItemSlice.reducer;
