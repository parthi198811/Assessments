import {login, logout} from '@redux/features/user/UserSlice';

class DataHelper {
  store = undefined;

  getStore = () => {
    return this.store;
  };

  setStore = storeRef => {
    this.store = storeRef;
  };

  login = userRef => {
    this.store.dispatch(login(userRef));
  };

  logout = () => {
    this.store.dispatch(logout());
  };

  getLoggedInUser = () => {
    return this.store?.getState().user.loggedInUser;
  };
}

export default new DataHelper();
