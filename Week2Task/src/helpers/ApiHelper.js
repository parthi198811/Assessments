import {create} from 'apisauce';
import {BASE_URL, HEADERS} from '../config/Constants';

const api = create({baseURL: BASE_URL, headers: HEADERS});

class ApiHelper {
  get = async url => {
    // Using ApiSauce
    const response = await api.get(url);
    return response.data;

    // Using Fetch

    // const response = await fetch(BASE_URL + url);
    // const responseJson = await response.json();

    // return responseJson;
  };
}

export default new ApiHelper();
