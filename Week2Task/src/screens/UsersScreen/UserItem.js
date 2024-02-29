import {View, Text, TouchableOpacity, Alert} from 'react-native';
import IconM from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/dist/FontAwesome5';
import React, {memo} from 'react';
import styles from './styles';
import {FirestoreHelper} from '@helpers';
import {useUserContext} from '../../contexts/UserContext';
import useRealtimeChats from '../../hooks/useRealtimeChats';

const UserItem = ({navigation, item}) => {
  const loggedInUser = useUserContext().state.loggedInUser;

  const {results} = useRealtimeChats(
    loggedInUser?.id,
    item.id,
    {
      field: 'time',
      type: 'desc',
    },
    1,
  );
  const latestMessage = results[0];

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Chat', {item});
      }}>
      <View style={styles.listItem}>
        <View>
          <Text style={styles.text}>
            {item.name + ' (' + item.gender + ')'}
          </Text>
          <Text>
            {latestMessage ? (
              latestMessage.url ? (
                <IconF name="file-alt" color={'black'} size={20} />
              ) : (
                latestMessage.text
              )
            ) : (
              ''
            )}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text>
            {latestMessage
              ? new Date(latestMessage.time).toLocaleDateString()
              : ''}
          </Text>
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
            <IconM name="delete" color={'red'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(UserItem);
