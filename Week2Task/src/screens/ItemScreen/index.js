import {View, Button, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {request} from '@redux/features/item/ItemSlice';
import {PRODUCTS_URL} from '@constants';
import ProductItem from '@components/ProductItem';

const ItemScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.item.items);

  return (
    <View>
      <Button
        title="TestSaga"
        onPress={() => {
          dispatch(request({url: PRODUCTS_URL}));
        }}
      />

      <FlatList
        data={items}
        renderItem={({item}) => {
          return <ProductItem item={item} />;
        }}
      />
    </View>
  );
};

export default ItemScreen;
