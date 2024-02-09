import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import styles from './styles';
import {BASE_COLOR} from '@constants';
import {addToCart} from '@redux/features/CartSlice';
import {getItemQuantity} from '@redux/features/CartSlice';

const ItemComponent = ({item}) => {
  const dispatch = useDispatch();
  const itemQty = getItemQuantity(item.id);

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
        <Text style={styles.text2}>{item.inStock ? 'In Stock' : ''}</Text>
        <Text style={styles.text1}>{item.display}</Text>
        <Text style={styles.text1}>{item.storageOptions.join(' | ')}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.text3}>{'£' + item.basePrice}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(item));
            }}>
            {itemQty != 0 && (
              <View
                style={{
                  backgroundColor: 'red',
                  borderRadius: 10,
                  alignItems: 'center',
                  width: 30,
                  bottom: -3,
                  right: -18,
                }}>
                <Text style={{color: '#fff'}}>{itemQty}</Text>
              </View>
            )}
            <Icon name="cart-plus" color={BASE_COLOR} size={35} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(ItemComponent);
