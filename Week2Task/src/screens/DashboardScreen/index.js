import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from './Header';
import {useUserContext} from '../../contexts/UserContext';
import DashboardTabs from './DashboardTabs';
import CustomDrawer from './CustomDrawer';
import {Alert} from 'react-native';
import IconM from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import DashboardHome from './DashboardHome';

const Drawer = createDrawerNavigator();

const DashboardScreen = () => {
  const {state, actions} = useUserContext();
  const loggedInUser = state.loggedInUser;

  const handleLogout = () => {
    Alert.alert('Are you sure you want to logout?', '', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'Logout',
        onPress: () => {
          actions.setLoggedInUser(null);
        },
      },
    ]);
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: 'white',
          width: 240,
        },
        drawerLabelStyle: {fontSize: 18},
        header: ({navigation}) => {
          return (
            <Header
              navigation={navigation}
              name={loggedInUser.name}
              logout={handleLogout}
            />
          );
        },
      }}
      drawerContent={props => (
        <CustomDrawer
          {...props}
          name={loggedInUser.name}
          logout={handleLogout}
        />
      )}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardTabs}
        options={{
          headerShown: true,
          drawerIcon: () => {
            return <IconM name="view-dashboard" size={25} />;
          },
        }}
      />
      <Drawer.Screen
        name="Old Dashboard"
        component={DashboardHome}
        options={{
          headerShown: true,
          drawerIcon: () => {
            return <IconM name="view-dashboard" size={25} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DashboardScreen;
