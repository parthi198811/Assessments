import firestore from '@react-native-firebase/firestore';
import {MESSAGE_COLLECTION, USER_COLLECTION} from '../constants';

class FirestoreHelper {
  addUserObject = async user => {
    try {
      await firestore().collection(USER_COLLECTION).add(user);
      return true;
    } catch (e) {
      return false;
    }
  };

  setUserObject = async user => {
    try {
      await firestore().collection(USER_COLLECTION).doc(user.email).set(user);
      return true;
    } catch (e) {
      return false;
    }
  };

  getUsers = async () => {
    let data = [];

    const users = await firestore().collection(USER_COLLECTION).get();
    users.forEach(user => data.push({id: user.id, ...user.data()}));
    console.log(data);

    return data;
  };

  getRealtimeUsers = setUsers => {
    firestore()
      .collection(USER_COLLECTION)
      .orderBy('name', 'asc')
      .onSnapshot(users => {
        let data = [];
        users.forEach(user => data.push({id: user.id, ...user.data()}));
        setUsers(data);
      });
  };

  getUser = async id => {
    const user = await firestore().collection(USER_COLLECTION).doc(id).get();
    return user.data();
  };

  getUserByEmail = async email => {
    let data = [];

    const users = await firestore()
      .collection(USER_COLLECTION)
      .where('email', '==', email)
      .limit(1)
      .get();

    users.forEach(user => data.push({id: user.id, ...user.data()}));

    return data[0];
  };

  deleteUser = async id => {
    try {
      await firestore().collection(USER_COLLECTION).doc(id).delete();
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  getRealtimeMessages = (srcUser, destUser, setMessages) => {
    let collectionKey = [srcUser, destUser];
    collectionKey.sort();

    firestore()
      .collection(collectionKey.join('-'))
      .orderBy('time', 'asc')
      .onSnapshot(messages => {
        let data = [];
        messages.forEach(message =>
          data.push({id: message.id, ...message.data()}),
        );
        setMessages(data);
      });
  };

  sendMessage = async (srcUser, destUser, message) => {
    let collectionKey = [srcUser, destUser];
    collectionKey.sort();

    try {
      await firestore()
        .collection(collectionKey.join('-'))
        .add({...message, time: new Date().getTime()});
      return true;
    } catch (e) {
      return false;
    }
  };
}

export default new FirestoreHelper();
