import {View, Text, TouchableOpacity, Alert} from 'react-native';
import IconM from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import React, {memo} from 'react';
import styles from './styles';
import {FirestoreHelper} from '@helpers';

const UserItem = ({navigation, item}) => {
  return (
    <View style={styles.listItem}>
      <View>
        <Text style={styles.text}>{item.name + ' (' + item.gender + ')'}</Text>
        <Text>{item.email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat', {item});
          }}>
          <IconM name="chat" color={'green'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Are you sure you want to delete?', '', [
              {
                text: 'Yes',
                onPress: () => {
                  FirestoreHelper.deleteUser(item.id).then(success => {
                    if (success) Alert('User deleted successfully.');
                  });
                },
              },
              {text: 'No', onPress: () => {}},
            ]);
          }}>
          <IconM name="delete" color={'red'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(UserItem);
