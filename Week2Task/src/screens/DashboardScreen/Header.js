import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Header = props => {
  const {navigation, name, logout} = props;

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            style={styles.drawer}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Icon name="menu" color={'white'} size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Hi,</Text>
          <Text style={[styles.headerText, {flex: 1}]}>{name}</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={logout}>
            <Icon name="logout" color={'white'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
