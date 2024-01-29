import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailComponent = props => {
  const {name, value} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default DetailComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    color: 'white',
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    height: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  value: {
    fontSize: 18,
    color: 'white',
    flex: 1,
  },
});
