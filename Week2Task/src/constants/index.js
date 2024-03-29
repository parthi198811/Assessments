import {Platform} from 'react-native';

export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const BASE_URL = 'https://dummyapi.online';
export const PRODUCTS_URL = '/api/products';

export const BASE_LOCAL_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3000/api'
    : 'http://localhost:3000/api';

export const GET_ITEMS_URL = '/items';
export const POST_ITEM_URL = '/items';

export const REGISTER_URL = '/Users';
export const LOGIN_URL = '/Users/login';
export const LOGOUT_URL = '/Users/logout';

export const GET_USER_PROFILE_URL = '/Users';
export const PUT_USER_PROFILE_URL = '/Users';

export const BUILD_NAME = 'com.itc.rnproject';

export const USER_COLLECTION = 'Users';
export const CHAT_COLLECTION = 'Chats';
export const MESSAGE_COLLECTION = 'Messages';

export const CHAT_STORAGE = 'gs://chats-bucket.appspot.com';

export const BANNER_IMAGE_URL =
  'https://global.hisense.com/dam/jcr:983144b1-36db-44ba-af97-7c15d37daa71/product-overview-hisense-smartphone-kv.h60-5g.jpg';

export const PRODUCT_ICON_URL =
  'https://www.vipexon.com/2201-large_default/samsung-galaxy-z-fold-4-dummy-phone-display-model.jpg';

export const ERROR_NETWORK_NOT_AVAILABLE = {
  title: 'Oops!',
  message: 'No Internet Connection.',
};

export const ERROR_WRONG_CREDENTIALS = {
  title: 'Oops!',
  message: 'Credentials are not correct. Please try again.',
};

export const ERROR_AUTHORIZATION_REQUIRED = {
  title: 'Oops!',
  message: 'Authorization is required. Please try again.',
};

export const ERROR_VALIDATION = {
  title: 'Oops!',
  message: 'Details already exists.',
};

export const BASE_COLOR = '#4287f5';

export const USERS_KEY = 'users';
export const TASKS_KEY = 'tasks';
export const THEME_KEY = 'theme';
