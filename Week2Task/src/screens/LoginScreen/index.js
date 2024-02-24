import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {request} from '@redux/features/user/UserSlice';
import {LOGIN_URL} from '@constants';
import {useSelector} from 'react-redux';
import {FirebaseAuthHelper} from '../../helpers';

const LoginScreen = ({navigation}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputUsernameRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const clearInputs = () => {
    setErrorMessage('');

    inputUsernameRef.current.clear();
    inputPasswordRef.current.clear();
  };

  const handleLogin = () => {
    // dispatch(request({url: LOGIN_URL, data: {email: username, password}}));
    FirebaseAuthHelper.login(username, password);
  };

  const handleForgotPassword = () => {
    FirebaseAuthHelper.forgotPassword(username);
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
        <TouchableOpacity
          onPress={() => {
            handleForgotPassword();
          }}>
          <Text style={styles.registerButton}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {flexDirection: 'row'}]}
          onPress={() => {
            FirebaseAuthHelper.onGoogleSignIn()
              .then(() => {
                console.log('Signed in with Google!');
              })
              .catch(e => {
                console.log('Google SignIn Error', e);
              });
          }}>
          <Icon name="login" color={'white'} size={30} />
          <Text style={[styles.buttonText, {marginLeft: 10}]}>
            Google Sign-In
          </Text>
        </TouchableOpacity>
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
