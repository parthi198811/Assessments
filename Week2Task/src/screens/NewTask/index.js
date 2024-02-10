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
import DateComponent from '@components/DateComponent';

const NewTask = props => {
  const {modalVisible, setModalVisible, updateTasks} = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const [errTitle, setErrTitle] = useState('');
  const [errDescription, setErrDescription] = useState('');
  const [errDate, setErrDate] = useState('');

  useEffect(() => {
    setTitle('');
    setDescription('');

    setErrTitle('');
    setErrDescription('');
    setErrDate('');
  }, [modalVisible]);

  useEffect(() => {
    setErrTitle('');
  }, [title]);

  useEffect(() => {
    setErrDescription('');
  }, [description]);

  useEffect(() => {
    setErrDate('');
  }, [dueDate]);

  const handleSubmit = () => {
    title == '' ? setErrTitle('Title is required.') : setErrTitle('');
    description == ''
      ? setErrDescription('Description is required.')
      : setErrDescription('');
    dueDate == '' ? setErrDate('Due Date is required.') : setErrDate('');

    if (title && description && dueDate) {
      Alert.alert('Task added successfully.', '', [
        {
          text: 'OK',
          onPress: () => {
            setModalVisible(false);
            updateTasks({
              title: title,
              description: description,
              dueDate: dueDate,
            });
          },
        },
      ]);
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
          <Text style={styles.headerContent}>New Task</Text>
        </View>
        <ScrollView>
          <View style={styles.contentcontainer}>
            <View style={styles.labelcontainer}>
              <Text style={styles.required}>*</Text>
              <Text style={styles.label}>Title:</Text>
            </View>
            <TextInput
              style={styles.textinput}
              placeholder="Title"
              value={title}
              onChangeText={value => {
                setTitle(value);
              }}
            />
            {errTitle && <Text style={styles.error}>{errTitle}</Text>}
            <View style={styles.labelcontainer}>
              <Text style={styles.required}>*</Text>
              <Text style={styles.label}>Description:</Text>
            </View>
            <TextInput
              style={[styles.textinput, {height: 80}]}
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
              <Text style={styles.label}>Due Date:</Text>
            </View>
            <DateComponent setDateValue={setDueDate} />
            {errDate && <Text style={styles.error}>{errDate}</Text>}
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default NewTask;
