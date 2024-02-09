import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import PersistentHelper from '@helpers/PersistentHelper';
import styles from './styles';
import {USERS_KEY} from '../../constants';

const RegisterScreen = ({navigation}) => {
  const [disabled, setDisabled] = useState(true);
  const [opacity, setOpacity] = useState(0.5);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [users, setUsers] = useState([]);

  useEffect(() => {
    PersistentHelper.getObject(USERS_KEY).then(data => {
      if (data !== null) setUsers(data);
    });
  }, []);

  useEffect(() => {
    if (
      name != '' &&
      mobile != '' &&
      email != '' &&
      username != '' &&
      password != '' &&
      cpassword != ''
    ) {
      setDisabled(false);
      setOpacity(1);
    } else {
      setDisabled(true);
      setOpacity(0.5);
    }
  }, [name, mobile, email, username, password, cpassword]);

  const checkUsername = useCallback(() => {
    if (users.length > 0) {
      const index = users.findIndex(obj => {
        return obj.username == username;
      });

      return index != -1 ? true : false;
    }
    return false;
  });

  const handleRegister = () => {
    if (cpassword != '' && password !== cpassword) {
      setErrorMessage('Password and Confirm Password is not similar.');
    } else {
      setErrorMessage('');
      if (!checkUsername(username)) {
        PersistentHelper.appendObject(USERS_KEY, {
          name: name,
          mobile: mobile,
          email: email,
          username: username,
          password: password,
        });

        Alert.alert('You have been registered successfully.', '', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]);
      } else {
        Alert.alert('Username is already exists.');
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.registerContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Register</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <View style={styles.labelcontainer}>
                <Text style={styles.required}>*</Text>
                <Text style={styles.label}>Name</Text>
              </View>
              <TextInput
                style={styles.textinput}
                onChangeText={value => {
                  setName(value);
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.labelcontainer}>
                <Text style={styles.required}>*</Text>
                <Text style={styles.label}>Mobile</Text>
              </View>
              <TextInput
                style={styles.textinput}
                inputMode="numeric"
                onChangeText={value => {
                  setMobile(value);
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.labelcontainer}>
                <Text style={styles.required}>*</Text>
                <Text style={styles.label}>Email</Text>
              </View>
              <TextInput
                style={styles.textinput}
                inputMode="email"
                onChangeText={value => {
                  setEmail(value);
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.labelcontainer}>
                <Text style={styles.required}>*</Text>
                <Text style={styles.label}>Username</Text>
              </View>
              <TextInput
                style={styles.textinput}
                onChangeText={value => {
                  setUsername(value);
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.labelcontainer}>
                <Text style={styles.required}>*</Text>
                <Text style={styles.label}>Password</Text>
              </View>
              <TextInput
                style={styles.textinput}
                secureTextEntry={true}
                onChangeText={value => {
                  setPassword(value);
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.labelcontainer}>
                <Text style={styles.required}>*</Text>
                <Text style={styles.label}>Confirm Password</Text>
              </View>
              <TextInput
                style={styles.textinput}
                secureTextEntry={true}
                onChangeText={value => {
                  setCPassword(value);
                }}
              />
            </View>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
          <TouchableOpacity
            style={[styles.button, {opacity: opacity}]}
            disabled={disabled}
            onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <Text style={styles.loginText}>Already User ? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
