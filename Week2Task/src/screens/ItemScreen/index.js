import {View, Button, FlatList, TextInput} from 'react-native';
import React, {useState} from 'react';
import {request} from '@redux/features/item/ItemSlice';
import {Items_URL} from '@constants';
import {Text} from 'react-native-paper';
import {useGetItemsQuery} from '@redux/apis/itemApi';
import {useAddItemMutation} from '../../redux/apis/itemApi';
import styles from './styles';

const ItemScreen = () => {
  const {data, error, isLoading} = useGetItemsQuery();
  const [postItem, {isLoading: isPosting}] = useAddItemMutation();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');

  console.log(data);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <TextInput
        style={styles.textInput}
        value={details}
        onChangeText={value => setDetails(value)}
      />
      <TextInput
        style={styles.textInput}
        value={image}
        onChangeText={value => setImage(value)}
      />
      <Button
        title="Add Item"
        onPress={() => {
          postItem({title, details, image});
        }}
      />

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                margin: 10,
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {item.name ? item.name : item.title}
              </Text>
              <Text>{item.details}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ItemScreen;
