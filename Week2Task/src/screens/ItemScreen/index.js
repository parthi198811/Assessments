import {View, Button, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {request} from '@redux/features/item/ItemSlice';
import {Items_URL} from '@constants';
import {Text} from 'react-native-paper';

const ItemScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.item.items);

  return (
    <View>
      <Button
        title="TestSaga"
        onPress={() => {
          dispatch(request({url: Items_URL}));
        }}
      />

      <FlatList
        data={items}
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
                {item.title}
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
