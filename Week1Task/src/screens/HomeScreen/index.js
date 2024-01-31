import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import ItemComponent from './ItemComponent';
import NewRecordScreen from '../NewRecordScreen';
import getData from '../../constants';

const HomeScreen = props => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const updateList = newData => {
    newData.id = listData.length + 1;
    setListData([newData, ...listData]);
  };

  const [listData, setListData] = useState(getData());

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
                  navigation.navigate('Details', item);
                }}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={[styles.buttonText, {color: 'black'}]}>New Record</Text>
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
