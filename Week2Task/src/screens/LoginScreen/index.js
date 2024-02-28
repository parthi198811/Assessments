import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {request} from '@redux/features/user/UserSlice';
import {LOGIN_URL} from '@constants';
import {useSelector} from 'react-redux';
import {PermissionHelper, FirebaseAuthHelper} from '@helpers';
import messaging from '@react-native-firebase/messaging';
import Input from '../../components/Input';
import {Formik} from 'formik';
import {LoginSchema} from '../../schemas';

const LoginScreen = ({navigation}) => {
  // const [errorMessage, setErrorMessage] = useState('');

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const inputUsernameRef = useRef(null);
  // const inputPasswordRef = useRef(null);

  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user);

  const clearInputs = () => {
    // setErrorMessage('');
    // inputUsernameRef.current.clear();
    // inputPasswordRef.current.clear();
  };

  const handleLogin = () => {
    // dispatch(request({url: LOGIN_URL, data: {email: username, password}}));
    // FirebaseAuthHelper.login(username, password);
  };

  const handleForgotPassword = () => {
    FirebaseAuthHelper.forgotPassword(username);
  };

  useEffect(() => {
    // Foreground Notifications
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage.data?.route == 'Register') {
        navigation.navigate(remoteMessage.data.route);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            FirebaseAuthHelper.login(values.email, values.password);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View style={styles.loginContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Login</Text>
              </View>
              <View style={styles.contentContainer}>
                {/* <Text style={styles.errorText}>{errorMessage}</Text> */}
                <View style={styles.textContainer}>
                  <Text style={styles.label}>USERNAME:</Text>
                  <Input
                    // ref={inputUsernameRef}
                    placeholder="Email"
                    name={'email'}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    error={errors.email}
                  />
                  {/* <TextInput
                ref={inputUsernameRef}
                style={styles.textinput}
                autoCapitalize="none"
                placeholder="Username"
                onChangeText={value => {
                  setUsername(value);
                }}
              /> */}
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.label}>PASSWORD:</Text>
                  <Input
                    // ref={inputPasswordRef}
                    placeholder="Password"
                    name={'password'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                    onSubmitEditing={handleLogin}
                    error={errors.password}
                  />
                  {/* <TextInput
                ref={inputPasswordRef}
                style={styles.textinput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={value => {
                  setPassword(value);
                }}
                onSubmitEditing={handleLogin}
              /> */}
                </View>
              </View>
              <TouchableOpacity
                style={[styles.button, {flexDirection: 'row'}]}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Icon name="login" color={'white'} size={30} />
                <Text style={[styles.buttonText, {marginLeft: 10}]}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
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
