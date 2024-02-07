import {View, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import BoxComponent from './BoxComponent';
import {BANNER_IMAGE_URL} from '../../config/Constants';

const DashboardHome = ({navigation}) => {
  const dashboardMenu = [
    {
      name: 'Products',
      icon_name: 'devices',
    },
    {
      name: 'Profile',
      icon_name: 'supervised-user-circle',
    },
  ];

  const navigateMenu = name => {
    navigation.navigate(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.banner}
        resizeMode="cover"
        source={{
          uri: BANNER_IMAGE_URL,
        }}
      />
      <ScrollView>
        <View style={styles.contentContainer}>
          {dashboardMenu.map(obj => {
            return (
              <BoxComponent
                name={obj.name}
                icon_name={obj.icon_name}
                navigateMenu={navigateMenu}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardHome;
