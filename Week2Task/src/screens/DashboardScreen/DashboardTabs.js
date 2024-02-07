import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {ProductsScreen, ProfileScreen} from '..';
import {BASE_COLOR} from '../../config/Constants';

const Tab = createBottomTabNavigator();

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: BASE_COLOR,
          height: 50,
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Products',
          tabBarIcon: ({color}) => <Icon name="list" color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="user-circle" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardTabs;
