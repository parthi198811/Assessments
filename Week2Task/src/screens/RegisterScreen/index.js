import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {request} from '@redux/features/user/UserSlice';
import {REGISTER_URL} from '@constants';
import {FirebaseAuthHelper} from '../../helpers';
import FirestoreHelper from '../../helpers/FirestoreHelper';
import {Field, Formik} from 'formik';
import InputCustom from '../../components/InputCustom';
import RegisterSchema from '../../schemas/RegisterSchema';
import DropdownComponent from '../../components/DropdownComponent';
import DateComponent from '../../components/DateComponent';

const genderData = [
  {label: 'Male', value: 'M'},
  {label: 'Female', value: 'F'},
];

const RegisterScreen = ({navigation}) => {
  const [disabled, setDisabled] = useState(true);
  const [opacity, setOpacity] = useState(0.5);

  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('');
  // const [age, setAge] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [cpassword, setCPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const customStyle = useMemo(() => {
    return {marginVertical: 8};
  }, []);

  // useEffect(() => {
  //   if (name && gender && age && email && password && cpassword) {
  //     setDisabled(false);
  //     setOpacity(1);
  //   } else {
  //     setDisabled(true);
  //     setOpacity(0.5);
  //   }
  // }, [name, email, password, cpassword]);

  // useEffect(() => {
  //   if (user.data?.id) {
  //     Alert.alert('You have been registered successfully.', '', [
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           navigation.navigate('Login');
  //         },
  //       },
  //     ]);
  //   } else if (user.failure) {
  //     Alert.alert(user.errorMessage.message);
  //   }
  // }, [user]);

  const handleRegister = async () => {
    FirebaseAuthHelper.signup(email, password);
    const response = await FirestoreHelper.addUserObject({
      name,
      gender,
      age,
      email,
    });
    response
      ? Alert.alert('User registered successfully.')
      : Alert.alert('ERROR');
    // if (cpassword != '' && password !== cpassword) {
    //   setErrorMessage('Password and Confirm Password is not similar.');
    // } else {
    //   setErrorMessage('');
    //   dispatch(
    //     request({
    //       url: REGISTER_URL,
    //       data: {
    //         realm: name,
    //         email,
    //         username,
    //         password,
    //       },
    //     }),
    //   );
    // }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            name: '',
            mobile: '',
            gender: '',
            birthdate: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => {
            FirebaseAuthHelper.signup(values.email, values.password);
            FirestoreHelper.addUserObject(values);
          }}>
          {({handleChange, handleSubmit, values}) => (
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
                  <Field
                    component={InputCustom}
                    name="name"
                    placeholder="Name"
                  />
                </View>
                <View style={styles.textContainer}>
                  <View style={styles.labelcontainer}>
                    <Text style={styles.required}>*</Text>
                    <Text style={styles.label}>Mobile No.</Text>
                  </View>
                  <Field
                    component={InputCustom}
                    name="mobile"
                    placeholder="Mobile No."
                  />
                </View>
                <View style={styles.textContainer}>
                  <DropdownComponent
                    name="gender"
                    data={genderData}
                    label="Gender"
                    value={values.gender}
                    setDropdownValue={handleChange('gender')}
                    customStyle={customStyle}
                  />
                </View>
                <DateComponent
                  name="birthdate"
                  label="Birthdate"
                  value={values.birthdate}
                  setDateValue={handleChange('birthdate')}
                  customStyle={customStyle}
                />
                <View style={styles.textContainer}>
                  <View style={styles.labelcontainer}>
                    <Text style={styles.required}>*</Text>
                    <Text style={styles.label}>Email</Text>
                  </View>
                  <Field
                    component={InputCustom}
                    name="email"
                    placeholder="Email"
                  />
                </View>
                <View style={styles.textContainer}>
                  <View style={styles.labelcontainer}>
                    <Text style={styles.required}>*</Text>
                    <Text style={styles.label}>Password</Text>
                  </View>
                  <Field
                    component={InputCustom}
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.textContainer}>
                  <View style={styles.labelcontainer}>
                    <Text style={styles.required}>*</Text>
                    <Text style={styles.label}>Confirm Password</Text>
                  </View>
                  <Field
                    component={InputCustom}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                  />
                </View>
                <Text style={styles.errorText}>{errorMessage}</Text>
              </View>
              <TouchableOpacity
                style={[styles.button]}
                // disabled={disabled}
                onPress={handleSubmit}>
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
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
