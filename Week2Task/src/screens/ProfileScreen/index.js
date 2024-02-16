import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import IconM from 'react-native-vector-icons/dist/MaterialIcons';
import {useUserContext} from '@contexts/UserContext';
import styles from './styles';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Image} from 'react-native-animatable';

const ProfileScreen = () => {
  const {state} = useUserContext();
  const loggedInUser = state.loggedInUser;

  const [profileImage, setProfileImage] = useState(null);

  return (
    <View style={styles.container}>
      <Button
        title="ImagePicker"
        onPress={() => {
          ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setProfileImage(image.sourceURL);
            console.log(image);
          });
        }}
      />
      <Image
        source={{uri: profileImage}}
        style={{width: 100, height: 100, backgroundColor: 'grey'}}
      />
      <Icon name="circle-user" color={'black'} size={100} />
      <Text style={styles.headerText}>{loggedInUser.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <IconM name="call" color={'black'} size={40} />
        <Text style={styles.mobileText}>{loggedInUser.mobile}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <IconM name="email" color={'black'} size={40} />
        <Text style={styles.emailText}>{loggedInUser.email}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
