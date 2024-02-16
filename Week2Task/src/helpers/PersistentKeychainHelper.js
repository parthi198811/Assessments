import * as Keychain from 'react-native-keychain';

class PersistentKeychainHelper {
  getInternetCredentials = async server => {
    return await Keychain.getInternetCredentials(server);
  };

  setInternetCredentials = (server, username, password) => {
    Keychain.setInternetCredentials(server, username, password);
  };

  resetInternetCredentials = server => {
    Keychain.resetInternetCredentials(server);
  };
}

export default new PersistentKeychainHelper();
