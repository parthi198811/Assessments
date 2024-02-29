import storage from '@react-native-firebase/storage';
import {CHAT_STORAGE} from '../constants';

class FirebaseStorageHelper {
  uploadFile = async (fileUri, fileName) => {
    const filename = new Date().getTime() + '.' + fileName.split('.').pop();

    const reference = storage().ref(filename);
    await reference.putFile(fileUri);

    const url = await reference.getDownloadURL();

    return {name: filename, url};
  };
}

export default new FirebaseStorageHelper();
