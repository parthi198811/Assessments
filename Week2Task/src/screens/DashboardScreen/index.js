import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Alert, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import DashboardTabs from '@components/TabsComponent';
import CustomDrawer from '@components/CustomDrawer';
import {useUserContext} from '@contexts/UserContext';
import {BASE_COLOR} from '@constants';
import styles from './styles';
import DataHelper from '@helpers/DataHelper';
import StorageScreen from '../StorageScreen';
import ItemScreen from '../ItemScreen';

const Drawer = createDrawerNavigator();

const DashboardScreen = () => {
  // const {state, actions} = useUserContext();
  // const loggedInUser = state.loggedInUser;
  const loggedInUser = DataHelper.getLoggedInUser();

  const handleLogout = () => {
    Alert.alert('Are you sure you want to logout?', '', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'Logout',
        onPress: () => {
          // actions.setLoggedInUser(null);
          DataHelper.logout();
        },
      },
    ]);
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        drawerStyle: styles.drawerStyle,
        drawerLabelStyle: styles.drawerLabelStyle,
        headerRight: () => {
          return (
            <View>
              <TouchableOpacity onPress={handleLogout}>
                <IconM name="logout" color={BASE_COLOR} size={30} />
              </TouchableOpacity>
            </View>
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
        name="DashboardTabs"
        component={DashboardTabs}
        options={{
          headerShown: true,
          title: 'Dashboard',
          drawerIcon: () => {
            return <IconM name="view-dashboard" size={25} />;
          },
        }}
      />
      <Drawer.Screen
        name="Item"
        component={ItemScreen}
        options={{
          headerShown: true,
          title: 'Items',
          drawerIcon: () => {
            return <IconM name="store" size={25} />;
          },
        }}
      />
      <Drawer.Screen
        name="Storage"
        component={StorageScreen}
        options={{
          headerShown: true,
          title: 'Storage',
          drawerIcon: () => {
            return <IconM name="store" size={25} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DashboardScreen;
