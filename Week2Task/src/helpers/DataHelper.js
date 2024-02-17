import {login, logout} from '@redux/features/user/UserSlice';

class DataHelper {
  store = undefined;

  getStore = () => {
    return this.store;
  };

  setStore = storeRef => {
    this.store = storeRef;
  };

  getUserAccessToken = () => {
    return this.store.getState().user.accessToken;
  };
}

export default new DataHelper();
