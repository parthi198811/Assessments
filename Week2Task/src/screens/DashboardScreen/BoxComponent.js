import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLOR} from '../../config/Constants';

const BoxComponent = props => {
  const {name, icon_name, navigateMenu} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigateMenu(name);
      }}>
      <Icon name={icon_name} color={'black'} size={50} />
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
    borderColor: BASE_COLOR,
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
  text: {fontSize: 18, fontWeight: 'bold', paddingTop: 5},
});
