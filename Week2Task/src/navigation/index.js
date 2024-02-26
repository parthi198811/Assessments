import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  DashboardScreen,
  ProductsScreen,
  ProfileScreen,
  TaskScreen,
} from '@screens';
import {UserContextProvider} from '@contexts/UserContext';
import {CartScreen} from '../screens';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import {PermissionHelper} from '../helpers';
import {Alert} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = props => {
  const user = useSelector(state => state.user);
  const [loggedInUser, setLoggedInUser] = useState(
    user.data?.accessToken ? user.data : null,
  );

  const [firebaseUser, setFirebaseUser] = useState(null);

  loadDeviceToken = async () => {
    let token = await PermissionHelper.getDeviceToken();
    console.log('Device Token : ' + token);
  };

  useEffect(() => {
    // Device Token
    loadDeviceToken();

    // Foreground Notifications
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });

    // Background Notifications
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Background Notification', remoteMessage);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      console.log('onAuthStateChanged');
      setFirebaseUser(user);
    });
    return subscriber;
  }, []);

  useEffect(() => {
    setLoggedInUser(user.data?.accessToken ? user.data : null);
  }, [user.data]);

  const renderAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Group>
    );
  };

  const renderMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Tasks" component={TaskScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Group>
    );
  };

  return (
    <UserContextProvider
      value={{
        state: {loggedInUser: loggedInUser},
        actions: {setLoggedInUser},
      }}>
      <Stack.Navigator>
        {/* {loggedInUser != null ? renderMainStack() : renderAuthStack()} */}
        {firebaseUser ? renderMainStack() : renderAuthStack()}
      </Stack.Navigator>
    </UserContextProvider>
  );
};

export default Navigation;
