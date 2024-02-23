import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import styles from './styles';
import ImageCropPicker from 'react-native-image-crop-picker';
import DateComponent from '@components/DateComponent';
import DropdownComponent from '@components/DropdownComponent';
import {useDispatch, useSelector} from 'react-redux';
import {
  request,
  removeProfile,
} from '@redux/features/userprofile/UserProfileSlice';
import {
  GET_USER_PROFILE_URL,
  PUT_USER_PROFILE_URL,
  BUILD_NAME,
} from '@constants';
import {PersistentKeychainHelper} from '@helpers';

const genderData = [
  {label: 'Male', value: 'M'},
  {label: 'Female', value: 'F'},
];

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const userProfile = useSelector(state => state.userprofile).data;

  const [profileImage, setProfileImage] = useState(userProfile.profileImage);

  const [name, setName] = useState(userProfile.realm);
  const [email, setEmail] = useState(userProfile.email);
  const [username, setUsername] = useState(userProfile.username);
  const [gender, setGender] = useState(userProfile.gender);
  const [birthdate, setBirthdate] = useState(userProfile.birthdate);
  const [country, setCountry] = useState(userProfile.country);
  const [password, setPassword] = useState('');

  const setDateValue = value => {
    setBirthdate(value);
  };

  const setDropdownValue = value => {
    setGender(value);
  };

  const customStyle = useMemo(() => {
    return {margin: 5, marginVertical: 8};
  }, []);

  useEffect(() => {
    dispatch(
      request({
        url: GET_USER_PROFILE_URL + '/' + user.data?.userId,
        method: 'GET',
      }),
    );
    PersistentKeychainHelper.getInternetCredentials(BUILD_NAME).then(data => {
      setPassword(data.password);
    });
  }, []);

  const handleSubmit = () => {
    dispatch(
      request({
        url: PUT_USER_PROFILE_URL + '/' + user.data?.userId,
        method: 'PUT',
        data: {
          realm: name,
          email,
          username,
          gender,
          birthdate,
          country,
          profileImage,
          password,
        },
      }),
    );

    Alert.alert('Profile updated successfully.');
  };

  const handleRemove = () => {
    dispatch(removeProfile());

    setName('');
    setEmail('');
    setUsername('');
    setGender('');
    setBirthdate('');
    setCountry('');
    setProfileImage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: profileImage}}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.camera}
          onPress={() => {
            ImageCropPicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then(image => {
              setProfileImage(image.sourceURL);
            });
          }}>
          <Icon name="camera" size={30} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Name"
              placeholderTextColor={'grey'}
              value={name}
              onChangeText={value => {
                setName(value);
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Email"
              placeholderTextColor={'grey'}
              autoCapitalize="none"
              value={email}
              onChangeText={value => {
                setEmail(value);
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Username"
              placeholderTextColor={'grey'}
              autoCapitalize="none"
              value={username}
              onChangeText={value => {
                setUsername(value);
              }}
            />
          </View>
          <DropdownComponent
            data={genderData}
            label="Gender"
            customStyle={customStyle}
            value={gender}
            setDropdownValue={setDropdownValue}
          />
          <DateComponent
            label="Birthdate"
            value={birthdate}
            setDateValue={setDateValue}
            customStyle={customStyle}
          />
          <View>
            <Text style={styles.label}>Country</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Country"
              placeholderTextColor={'grey'}
              value={country}
              onChangeText={value => {
                setCountry(value);
              }}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        {/* {userProfile?.realm && (
          <TouchableOpacity style={styles.button} onPress={handleRemove}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        )} */}
      </View>
    </View>
  );
};

export default ProfileScreen;
