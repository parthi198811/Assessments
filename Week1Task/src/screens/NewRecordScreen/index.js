import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './styles';

const NewRecordScreen = props => {
  const {modalVisible, setModalVisible, updateList} = props;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [density, setDensity] = useState('');
  const [radius, setRadius] = useState('');
  const [image, setImage] = useState('');

  const [errName, setErrName] = useState('');
  const [errDescription, setErrDescription] = useState('');
  const [errAge, setErrAge] = useState('');
  const [errImage, setErrImage] = useState('');

  useEffect(() => {
    setName('');
    setDescription('');
    setAge('');
    setDensity('');
    setRadius('');
    setImage('');

    setErrName('');
    setErrDescription('');
    setErrAge('');
    setErrImage('');
  }, [modalVisible]);

  useEffect(() => {
    setErrName('');
  }, [name]);

  useEffect(() => {
    setErrDescription('');
  }, [description]);

  useEffect(() => {
    setErrAge('');
  }, [age]);

  useEffect(() => {
    setErrImage('');
  }, [image]);

  const handleSubmit = () => {
    name == '' ? setErrName('Name is required.') : setErrName('');
    description == ''
      ? setErrDescription('Description is required.')
      : setErrDescription('');
    age == '' ? setErrAge('Age is required.') : setErrAge('');
    image == '' ? setErrImage('Image is required.') : setErrImage('');

    if (name != '' && description != '' && age != '' && image != '') {
      updateList({
        name: name,
        description: description,
        age: age,
        density: density,
        radius: radius,
        image: image,
      });

      Alert.alert('Record added successfully.');
      setModalVisible(false);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContent}>New Record</Text>
        </View>
        <ScrollView>
          <View style={styles.contentcontainer}>
            <View style={styles.labelcontainer}>
              <Text style={styles.required}>*</Text>
              <Text style={styles.label}>Name:</Text>
            </View>
            <TextInput
              style={styles.textinput}
              placeholder="Name"
              value={name}
              onChangeText={value => {
                setName(value);
              }}
            />
            {errName && <Text style={styles.error}>{errName}</Text>}
            <View style={styles.labelcontainer}>
              <Text style={styles.required}>*</Text>
              <Text style={styles.label}>Description:</Text>
            </View>
            <TextInput
              style={[styles.textinput, {height: 60}]}
              placeholder="Description"
              value={description}
              multiline={true}
              onChangeText={value => {
                setDescription(value);
              }}
            />
            {errDescription && (
              <Text style={styles.error}>{errDescription}</Text>
            )}
            <View style={styles.labelcontainer}>
              <Text style={styles.required}>*</Text>
              <Text style={styles.label}>Age:</Text>
            </View>
            <TextInput
              style={styles.textinput}
              placeholder="Age"
              value={age}
              onChangeText={value => {
                setAge(value);
              }}
            />
            {errAge && <Text style={styles.error}>{errAge}</Text>}
            <Text style={styles.label}>Density:</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Density"
              value={density}
              onChangeText={value => {
                setDensity(value);
              }}
            />
            <Text style={styles.label}>Radius:</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Radius"
              value={radius}
              onChangeText={value => {
                setRadius(value);
              }}
            />
            <View style={styles.labelcontainer}>
              <Text style={styles.required}>*</Text>
              <Text style={styles.label}>Image:</Text>
            </View>
            <TextInput
              style={styles.textinput}
              placeholder="Image URL"
              value={image}
              onChangeText={value => {
                setImage(value);
              }}
            />
            {errImage && <Text style={styles.error}>{errImage}</Text>}
          </View>
        </ScrollView>
        <View style={styles.submitContainer}>
          <TouchableOpacity style={styles.cancel} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default NewRecordScreen;
