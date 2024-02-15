import {create} from 'apisauce';
import {BASE_LOCAL_URL, HEADERS} from '@constants';

const api = create({baseURL: BASE_LOCAL_URL, headers: HEADERS});

class TestApiHelper {
  get = async url => {
    console.log(url);
    const response = await api.get(url);
    return response.data;
  };
}

export default new TestApiHelper();
