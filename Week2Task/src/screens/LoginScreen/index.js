import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useUserContext} from '@contexts/UserContext';
import styles from './styles';
import PersistentHelper from '@helpers/PersistentHelper';
import {USERS_KEY} from '../../constants';

const LoginScreen = ({navigation}) => {
  const {actions} = useUserContext();

  const [errorMessage, setErrorMessage] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputUsernameRef = useRef(null);
  const inputPasswordRef = useRef(null);

  useEffect(() => {
    PersistentHelper.clear();
    PersistentHelper.setObject(USERS_KEY, [
      {
        id: 1,
        name: 'Parthi',
        mobile: '1234567890',
        email: 'test@test.com',
        username: 'parthi',
        password: 'parthi',
      },
    ]);
  }, []);

  const clearInputs = () => {
    setErrorMessage('');

    inputUsernameRef.current.clear();
    inputPasswordRef.current.clear();
  };

  const handleLogin = () => {
    PersistentHelper.getObject(USERS_KEY).then(users => {
      if (users) {
        const userObj = users.find(obj => {
          return obj.username == username && obj.password == password;
        });

        if (userObj != undefined) {
          actions.setLoggedInUser(userObj);
        } else {
          setErrorMessage('Username or Password is incorrect.');
        }
      } else {
        setErrorMessage('Username or Password is incorrect.');
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.loginContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Login</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.errorText}>{errorMessage}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.label}>USERNAME:</Text>
              <TextInput
                ref={inputUsernameRef}
                style={styles.textinput}
                autoCapitalize="none"
                placeholder="Username"
                onChangeText={value => {
                  setUsername(value);
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>PASSWORD:</Text>
              <TextInput
                ref={inputPasswordRef}
                style={styles.textinput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={value => {
                  setPassword(value);
                }}
                onSubmitEditing={handleLogin}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[styles.button, {flexDirection: 'row'}]}
            onPress={handleLogin}>
            <Icon name="login" color={'white'} size={30} />
            <Text style={[styles.buttonText, {marginLeft: 10}]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.registerText}>Don't have an account ? </Text>
          <TouchableOpacity
            onPress={() => {
              clearInputs();
              navigation.navigate('Register');
            }}>
            <Text style={styles.registerButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
