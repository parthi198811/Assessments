import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Switch} from 'react-native-paper';
import {PersistentHelper} from '@helpers';
import {THEME_KEY} from '@constants';
import {useSettingsContext} from '@contexts/SettingsContext';
import {useTheme} from '@react-navigation/native';

const SettingsScreen = () => {
  const {colors} = useTheme();
  const {setTheme} = useSettingsContext();
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    PersistentHelper.getValue(THEME_KEY).then(value => {
      setIsEnabled(value == 'true' ? true : false);
    });
  }, []);

  useEffect(() => {
    setTheme(isEnabled);
    PersistentHelper.setValue(THEME_KEY, isEnabled.toString());
  }, [isEnabled]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: colors.text}]}>Dark Theme</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        value={isEnabled}
        onValueChange={() => {
          setIsEnabled(!isEnabled);
        }}
      />
    </View>
  );
};

export default SettingsScreen;
