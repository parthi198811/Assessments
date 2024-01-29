import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ItemComponent = ({item, handleItemPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => handleItemPress(item)}>
        <View style={styles.itemContainer}>
          <Image style={styles.itemimage} source={{uri: item.image}} />
          <Text style={styles.itemtext}>{item.name}</Text>
          <Image
            style={styles.itemimage}
            source={{
              uri: 'https://www.iconsdb.com/icons/preview/white/arrow-24-xxl.png',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  listItem: {justifyContent: 'center'},
  itemContainer: {flexDirection: 'row'},
  itemimage: {width: 30, height: 30, justifyContent: 'flex-start'},
  itemtext: {fontSize: 25, color: 'white', marginHorizontal: 10, flex: 1},
});
