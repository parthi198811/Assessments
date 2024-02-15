import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import CartItem from '@components/CartItem';
import styles from './styles';
import {clearCart} from '@redux/features/cart/CartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems);
  const totalItems = useSelector(state => state.cart.totalItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={cartItems}
        renderItem={({item}) => {
          return <CartItem cartItem={item} />;
        }}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.checkoutContainer}>
          <TouchableOpacity>
            <Text style={styles.checkoutText}>
              {'Checkout (' + totalItems + ')'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Are you sure you want to clear the cart?', '', [
                {text: 'No', onPress: () => {}},
                {
                  text: 'Yes',
                  onPress: () => {
                    dispatch(clearCart());
                  },
                },
              ]);
            }}>
            <Icon name="trash" color={'black'} size={25} />
          </TouchableOpacity>
        </View>
        <Text style={styles.bottomText}>
          Total: <Text style={styles.bottomValueText}>{'£' + totalPrice}</Text>
        </Text>
      </View>
    </View>
  );
};

export default CartScreen;
