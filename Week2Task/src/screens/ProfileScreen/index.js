import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import styles from './styles';
import ImageCropPicker from 'react-native-image-crop-picker';
import DateComponent from '@components/DateComponent';
import DropdownComponent from '@components/DropdownComponent';
import {useDispatch, useSelector} from 'react-redux';
import {addProfile} from '@redux/features/user/UserSlice';

const genderData = [
  {label: 'Male', value: 'M'},
  {label: 'Female', value: 'F'},
];

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.user).profile;

  const [profileImage, setProfileImage] = useState(userProfile.profileImage);

  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [gender, setGender] = useState(userProfile.gender);
  const [birthdate, setBirthdate] = useState(userProfile.birthdate);
  const [country, setCountry] = useState(userProfile.country);

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
    setName(userProfile.name);
    setEmail(userProfile.email);
    setGender(userProfile.gender);
    setBirthdate(userProfile.birthdate);
    setCountry(userProfile.country);
    setProfileImage(userProfile.profileImage);
  }, [userProfile]);

  const handleSubmit = () => {
    dispatch(
      addProfile({name, email, gender, birthdate, country, profileImage}),
    );
  };

  const handleRemove = () => {
    dispatch(addProfile({}));

    setName(undefined);
    setEmail(undefined);
    setGender(undefined);
    setBirthdate(undefined);
    setCountry(undefined);
    setProfileImage(undefined);
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
          <TextInput
            style={styles.textinput}
            placeholder="Name"
            placeholderTextColor={'grey'}
            value={name}
            onChangeText={value => {
              setName(value);
            }}
          />
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
          <TextInput
            style={styles.textinput}
            placeholder="Country"
            placeholderTextColor={'grey'}
            value={country}
            onChangeText={value => {
              setCountry(value);
            }}
          />
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {userProfile?.name ? 'Update' : 'Submit'}
          </Text>
        </TouchableOpacity>
        {userProfile?.name && (
          <TouchableOpacity style={styles.button} onPress={handleRemove}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;
