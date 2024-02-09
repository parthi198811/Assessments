import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {ProductsScreen, ProfileScreen, CartScreen} from '@screens';
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
          height: 50,
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
          tabBarIcon: ({color}) => <Icon name="list" color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarBadge: totalItems,
          tabBarIcon: ({color}) => (
            <Icon name="cart-shopping" color={color} size={35} />
          ),
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
