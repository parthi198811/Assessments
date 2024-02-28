import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconFA5 from 'react-native-vector-icons/dist/FontAwesome5';
import IconFA6 from 'react-native-vector-icons/dist/FontAwesome6';
import IconM from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/dist/Ionicons';
import {
  ProductsScreen,
  ProfileScreen,
  CartScreen,
  TaskScreen,
  SettingsScreen,
  UsersScreen,
} from '@screens';
import {BASE_COLOR} from '@constants';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const DashboardTabs = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: BASE_COLOR,
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Products',
          tabBarIcon: ({color}) => (
            <IconM name="devices" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarBadge: totalItems,
          tabBarIcon: ({color}) => (
            <IconFA6 name="cart-shopping" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <IconFA5 name="tasks" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <IconFA5 name="users" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <IconFA6 name="user-circle" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <IconI name="settings-outline" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardTabs;
