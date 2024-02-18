import CartSlice from './cart/CartSlice';
import ItemSlice from './item/ItemSlice';
import UserSlice from './user/UserSlice';
import {itemApi} from '../apis/itemApi';
import UserProfileSlice from './userprofile/UserProfileSlice';

export default {
  cart: CartSlice,
  user: UserSlice,
  userprofile: UserProfileSlice,
  item: ItemSlice,
  itemApi: itemApi.reducer,
};
