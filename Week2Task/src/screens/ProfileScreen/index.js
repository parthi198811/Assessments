import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import IconM from 'react-native-vector-icons/dist/MaterialIcons';
import {useUserContext} from '../../contexts/UserContext';
import styles from './styles';

const ProfileScreen = () => {
  const {state} = useUserContext();
  const loggedInUser = state.loggedInUser;

  return (
    <View style={styles.container}>
      <Icon name="circle-user" color={'black'} size={100} />
      <Text style={styles.headerText}>{loggedInUser.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <IconM name="call" color={'black'} size={40} />
        <Text style={styles.mobileText}>{loggedInUser.mobile}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <IconM name="email" color={'black'} size={40} />
        <Text style={styles.emailText}>{loggedInUser.email}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
