import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {FirestoreHelper} from '@helpers';
import UserItem from './UserItem';

const UsersScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    FirestoreHelper.getRealtimeUsers(setUsers);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => {
          return <UserItem navigation={navigation} item={item} />;
        }}
        keyExtractor={item => {
          item.id;
        }}
      />
    </View>
  );
};

export default UsersScreen;
