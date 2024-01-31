import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
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

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      presentationStyle="pageSheet"
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContent}>New Record</Text>
        </View>
        <View>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Name"
            value={name}
            onChangeText={value => {
              setName(value);
            }}
          />
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={[styles.textinput, {height: 60}]}
            placeholder="Description"
            value={description}
            multiline={true}
            onChangeText={value => {
              setDescription(value);
            }}
          />
          <Text style={styles.label}>Age:</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Age"
            value={age}
            onChangeText={value => {
              setAge(value);
            }}
          />
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
          <Text style={styles.label}>Image:</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Image URL"
            value={image}
            onChangeText={value => {
              setImage(value);
            }}
          />

          <View style={styles.submitContainer}>
            <TouchableOpacity style={styles.cancel} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => {
                updateList({
                  name: name,
                  description: description,
                  age: age,
                  density: density,
                  radius: radius,
                  image: image,
                });

                setName('');
                setDescription('');
                setAge('');
                setDensity('');
                setRadius('');
                setImage('');

                Alert.alert('Record added successfully.');
                setModalVisible(false);
              }}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewRecordScreen;
