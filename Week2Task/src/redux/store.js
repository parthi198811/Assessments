import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '@redux/features/CartSlice';

export default configureStore({
  reducer: {cart: cartReducer},
});
