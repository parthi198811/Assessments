import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

class PersistenMMKVtHelper {
  getValue = async key => {
    return await storage.getString(key);
  };

  setValue = (key, value) => {
    storage.set(key, value);
  };

  getObject = async key => {
    const objectString = await this.getValue(key);
    return JSON.parse(objectString);
  };

  setObject = (key, object) => {
    const objectString = JSON.stringify(object);
    this.setValue(key, objectString);
  };

  removeItem = key => {
    storage.delete(key);
  };

  clear = () => {
    storage.clearAll();
  };
}

export default new PersistenMMKVtHelper();
