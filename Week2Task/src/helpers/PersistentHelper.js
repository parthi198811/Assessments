import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistentHelper {
  getValue = async key => {
    return await AsyncStorage.getItem(key);
  };

  setValue = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  getObject = async key => {
    const objectString = await this.getValue(key);
    return JSON.parse(objectString);
  };

  setObject = (key, object) => {
    const objectString = JSON.stringify(object);
    this.setValue(key, objectString);
  };

  appendObject = async (key, object) => {
    const data = await this.getObject(key);

    const newObject = data
      ? [...data, {...object, id: data.length + 1}]
      : [{...object, id: 1}];
    this.setObject(key, newObject);
  };

  removeItem = key => {
    AsyncStorage.removeItem(key);
  };

  clear = () => {
    AsyncStorage.clear();
  };
}

export default new PersistentHelper();
