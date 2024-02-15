import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '@redux/features/cart/CartSlice';

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const item = cartItem.item;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: item.image_url,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text1}>{'By ' + item.brand}</Text>
        <Text style={styles.text2}>{'£' + item.basePrice}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.text3}>{'£' + cartItem.total}</Text>
          <View style={styles.qtyContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(removeFromCart(item.id));
              }}>
              <Icon name="minus" color={'white'} size={15} />
            </TouchableOpacity>
            <View style={styles.qtyView}>
              <Text>{cartItem.quantity}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(addToCart(item));
              }}>
              <Icon name="plus" color={'white'} size={15} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(CartItem);
