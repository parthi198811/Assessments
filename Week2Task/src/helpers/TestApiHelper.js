import {create} from 'apisauce';
import {BASE_LOCAL_URL, HEADERS} from '@constants';
import {
  ERROR_NETWORK_NOT_AVAILABLE,
  ERROR_WRONG_CREDENTIALS,
  ERROR_VALIDATION,
} from '@constants';

const api = create({baseURL: BASE_LOCAL_URL, headers: HEADERS});

class TestApiHelper {
  get = async (url, data, headers = {}) => {
    const response = await api.get(url, data, {headers: headers});
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response.data);
    });
  };

  post = async (url, data, headers) => {
    const response = await api.post(url, data, {headers: headers});
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response.data);
    });
  };

  put = async (url, data, headers = {}) => {
    const response = await api.put(url, data, {headers: headers});
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response.data);
    });
  };

  handlePromise = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'LOGIN_FAILED') {
        reject(ERROR_WRONG_CREDENTIALS);
      } else if (response.error.code === 'NETWORK_ERROR') {
        reject(ERROR_NETWORK_NOT_AVAILABLE);
      } else {
        reject(ERROR_VALIDATION);
      }
    } else {
      resolve(response);
    }
  };
}

export default new TestApiHelper();
