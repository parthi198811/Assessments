import {View, Text, Image} from 'react-native';
import React from 'react';
import {useUserContext} from '../../contexts/UserContext';
import styles from './styles';
import {
  EMAIL_ICON_URL,
  MOBILE_ICON_URL,
  USER_ICON_URL,
} from '../../config/Constants';

const ProfileScreen = () => {
  const {state} = useUserContext();
  const loggedInUser = state.loggedInUser;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: USER_ICON_URL}} />
      <Text style={styles.headerText}>{loggedInUser.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 40, height: 40}}
          resizeMode="contain"
          source={{
            uri: MOBILE_ICON_URL,
          }}
        />
        <Text style={styles.mobileText}>{loggedInUser.mobile}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 50, height: 50}}
          resizeMode="contain"
          source={{
            uri: EMAIL_ICON_URL,
          }}
        />
        <Text style={styles.emailText}>{loggedInUser.email}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
