import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';
import {
  PersistentKeychainHelper,
  PersistentSensitiveInfoHelper,
  PersistentMMKVHelper,
} from '@helpers';

const StorageScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [results, setResults] = useState(undefined);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.textinput}
            placeholder="Username"
            onChangeText={value => {
              setUsername(value);
            }}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            onChangeText={value => {
              setPassword(value);
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.buttonContainer}>
            <Text style={styles.headerText}>Keychain Usage</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                PersistentKeychainHelper.setInternetCredentials(
                  'com.itc.week2task',
                  username,
                  password,
                );
              }}>
              <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                PersistentKeychainHelper.getInternetCredentials(
                  'com.itc.week2task',
                ).then(data => {
                  setResults(JSON.stringify(data));
                });
              }}>
              <Text>Get</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                PersistentKeychainHelper.resetInternetCredentials(
                  'com.itc.week2task',
                );
              }}>
              <Text>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.buttonContainer}>
            <Text style={styles.headerText}>Sensitive Info Usage</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                PersistentSensitiveInfoHelper.setItem('username', username);
              }}>
              <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                PersistentSensitiveInfoHelper.getItem('username').then(data => {
                  setResults('Username: ' + data);
                });
              }}>
              <Text>Get</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                PersistentSensitiveInfoHelper.deleteItem('username');
              }}>
              <Text>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.buttonContainer}>
            <Text style={styles.headerText}>MMKV Usage</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                PersistentMMKVHelper.setValue('username', username);
              }}>
              <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                PersistentMMKVHelper.getValue('username').then(data => {
                  setResults('Username: ' + data);
                });
              }}>
              <Text>Get</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                PersistentMMKVHelper.removeItem('username');
              }}>
              <Text>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>Results</Text>
          <Text style={styles.headerText}>{results}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default StorageScreen;
