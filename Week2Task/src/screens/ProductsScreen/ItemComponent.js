import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemComponent = props => {
  const {item} = props;
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
        <Text style={styles.text3}>{'£' + item.basePrice}</Text>
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 5,
    padding: 10,
    height: 150,
    borderRadius: 2,
    backgroundColor: 'white',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    justifyContent: 'flex-start',
    width: '73%',
    justifyContent: 'space-evenly',
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  text1: {fontSize: 15},
  text2: {fontSize: 15, fontWeight: 'bold', color: 'green'},
  text3: {fontSize: 20, fontWeight: 'bold'},
});
