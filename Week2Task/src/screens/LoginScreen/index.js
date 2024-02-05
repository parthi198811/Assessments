import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useUserContext} from '../../contexts/UserContext';
import styles from './styles';
import Data from '../../config/Data';

const LoginScreen = ({navigation}) => {
  const {actions} = useUserContext();

  const [errorMessage, setErrorMessage] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputUsernameRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const clearInputs = () => {
    setErrorMessage('');

    inputUsernameRef.current.clear();
    inputPasswordRef.current.clear();
  };

  const handleLogin = () => {
    const userObj = Data.getUser(username, password);
    if (userObj != undefined) {
      actions.setLoggedInUser(userObj);
    } else {
      setErrorMessage('Username or Password is incorrect.');
    }
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
                passwordRules={'test'}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={value => {
                  setPassword(value);
                }}
                onSubmitEditing={handleLogin}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
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
