import SInfo from 'react-native-sensitive-info';

class PersistentSensitiveInfoHelper {
  getItem = async key => {
    const value = await SInfo.getItem(key, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    });

    return value;
  };

  setItem = (key, value) => {
    SInfo.setItem(key, value, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    });
  };

  deleteItem = async key => {
    await SInfo.deleteItem(key, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    });
  };
}

export default new PersistentSensitiveInfoHelper();
