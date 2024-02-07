import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const CustomDrawer = props => {
  const {name, logout} = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <SafeAreaView>
          <Text style={styles.headerText}>Hi, {name}</Text>
        </SafeAreaView>
      </View>
      <View style={styles.contentContainer}>
        <DrawerItemList {...props} />
        <DrawerItem
          labelStyle={styles.drawerItem}
          label="Logout"
          onPress={logout}
          icon={() => {
            return <Icon name="logout" size={25} />;
          }}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Version 1.0</Text>
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'orange',
    padding: '10',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  contentContainer: {flex: 1},
  footerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'orange',
  },
  footerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  drawerItem: {fontSize: 18},
});
