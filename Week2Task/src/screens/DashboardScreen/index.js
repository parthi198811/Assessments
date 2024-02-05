import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {useUserContext} from '../../contexts/UserContext';
import styles from './styles';
import BoxComponent from './BoxComponent';
import {
  BANNER_IMAGE_URL,
  LOGOUT_ICON_URL,
  PRODUCTS_IMAGE_URL,
  PROFILE_IMAGE_URL,
} from '../../config/Constants';

const DashboardScreen = ({navigation}) => {
  const {state, actions} = useUserContext();
  const loggedInUser = state.loggedInUser;

  const dashboardMenu = [
    {
      name: 'Products',
      imageUrl: PRODUCTS_IMAGE_URL,
    },
    {
      name: 'Profile',
      imageUrl: PROFILE_IMAGE_URL,
    },
  ];

  const navigateMenu = name => {
    navigation.navigate(name);
  };

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
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.headerText}>Hi,</Text>
          <Text style={[styles.headerText, {flex: 1}]}>
            {loggedInUser.name}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={handleLogout}>
            <Image
              style={styles.headerButton}
              source={{
                uri: LOGOUT_ICON_URL,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
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
                imageUrl={obj.imageUrl}
                navigateMenu={navigateMenu}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
