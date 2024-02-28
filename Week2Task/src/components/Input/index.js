import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <View>
      <TextInput {...props} style={styles.textInput} autoCapitalize="none" />
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    marginVertical: 2,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
  },
  error: {
    margin: 2,
    fontSize: 12,
    color: 'red',
  },
});
