import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  DashboardScreen,
  ProductsScreen,
  ProfileScreen,
} from '..';
import {UserContextProvider} from '../../contexts/UserContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

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
