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

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = useSelector(state => state.user);
  const [loggedInUser, setLoggedInUser] = useState(
    user.data?.accessToken ? user.data : null,
  );

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
        {loggedInUser != null ? renderMainStack() : renderAuthStack()}
      </Stack.Navigator>
    </UserContextProvider>
  );
};

export default Navigation;
