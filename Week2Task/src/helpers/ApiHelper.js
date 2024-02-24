import {create} from 'apisauce';
import {BASE_URL, HEADERS} from '@constants';
import {initializeSslPinning} from 'react-native-ssl-public-key-pinning';

initializeSslPinning({
  'dummyapi.online': {
    includeSubdomains: true,
    publicKeyHashes: [
      'vhM4/VqeRGHEnZXEviILvWosdQ2e0dq496owXiqsfRo=',
      // '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
    ],
  },
})
  .then(success => {
    console.log(success);
  })
  .catch(err => {
    console.log(err);
  });

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
