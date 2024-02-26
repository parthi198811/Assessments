import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

class PermissionHelper {
  getDeviceToken = async () => {
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

  requestPermissionForAndroid = () => {
    this.requestNotificationPermissionForAndroid();
    this.requestLocationPermissionForAndroid();
  };

  requestNotificationPermissionForAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'RNProject',
          message: 'Asking for notification permission',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    } catch (e) {
      console.log(e);
    }
  };

  requestLocationPermissionForAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'RNProject',
          message: 'Asking for location permission',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted.');
      } else {
        console.log('Location permission denied.');
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export default new PermissionHelper();
