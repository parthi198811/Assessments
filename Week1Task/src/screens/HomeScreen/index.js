import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import ItemComponent from './ItemComponent';
import NewRecordScreen from '../NewRecordScreen';
import getData from '../../constants';

const HomeScreen = props => {
  const {navigation, route} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const params = route.params;

  const updateList = newData => {
    newData.id = listData.length + 1;
    setListData([newData, ...listData]);
  };

  const [listData, setListData] = useState(getData());

  useEffect(() => {
    if (params?.item_id) {
      const newData = listData.filter(obj => obj.id != params.item_id);
      setListData(newData);

      Alert.alert('Record deleted successfully.');
      params.item_id = '';
    }
  }, [params?.item_id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContent}>Solar System</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listData}
          renderItem={({item, index}) => {
            return (
              <ItemComponent
                item={item}
                handleItemPress={item => {
                  navigation.navigate('Details', {
                    item: item,
                  });
                }}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://static-00.iconduck.com/assets.00/plus-circle-icon-512x512-qd3dnhjf.png',
            }}
          />
          <Text style={styles.buttonText}>New Record</Text>
        </TouchableOpacity>
      </View>

      <NewRecordScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        updateList={updateList}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
