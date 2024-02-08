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

  appendObject = (key, object) => {
    this.getObject(key).then(data => {
      if (data !== null) {
        object.id = data.length + 1;
        const newObject = [...data, object];

        const objectString = JSON.stringify(newObject);
        this.setValue(key, objectString);
      } else {
        object.id = 1;
        this.setObject(key, [object]);
      }
    });
  };

  clear = () => {
    AsyncStorage.clear();
  };
}

export default new PersistentHelper();
