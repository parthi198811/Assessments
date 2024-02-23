import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

class PermissionHelper {
  getDeviceToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    return await messaging().getToken();
  };

  requestNotificationPermissionForiOS = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('iOS Notification Permission Status:', authStatus);
    }
  };

  requestNotificationPermissionForAndroid = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  };
}

export default new PermissionHelper();
