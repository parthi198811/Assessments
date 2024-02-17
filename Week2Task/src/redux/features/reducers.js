import CartSlice from './cart/CartSlice';
import ItemSlice from './item/ItemSlice';
import UserSlice from './user/UserSlice';
import {itemApi} from '../apis/itemApi';

export default {
  cart: CartSlice,
  user: UserSlice,
  item: ItemSlice,
  itemApi: itemApi.reducer,
};
