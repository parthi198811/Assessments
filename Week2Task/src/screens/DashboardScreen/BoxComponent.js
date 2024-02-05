import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const BoxComponent = props => {
  const {name, imageUrl, navigateMenu} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigateMenu(name);
      }}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default BoxComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#4287f5',
    margin: 10,
    padding: 10,
    height: 120,
    width: 150,
    backgroundColor: '#a6c5f7',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  image: {width: '100%', height: 50, flex: 1},
  text: {fontSize: 18, fontWeight: 'bold', paddingTop: 5},
});
