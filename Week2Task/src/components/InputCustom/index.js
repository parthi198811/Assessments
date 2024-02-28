import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputCustom = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  return (
    <View>
      <TextInput
        name={name}
        value={value}
        onChangeText={value => onChange(name)(value)}
        onBlur={() => setFieldTouched(name)}
        {...inputProps}
        style={styles.textInput}
        autoCapitalize="none"
      />
      {errors[name] && touched[name] && (
        <Text style={styles.error}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default InputCustom;

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
