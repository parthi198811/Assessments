import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Switch} from 'react-native-paper';
import {PersistentHelper} from '@helpers';
import {THEME_KEY} from '@constants';
import {useSettingsContext} from '@contexts/SettingsContext';
import {useTheme} from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n';

const SettingsScreen = () => {
  const {t} = useTranslation();

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
    <View style={{flex: 1}}>
      <View style={{borderWidth: 1, borderRadius: 5, margin: 10, padding: 10}}>
        <Text>{t('welcome')}</Text>
        <View style={{flexDirection: 'row'}}>
          <Button
            title="EN"
            onPress={() => {
              i18n.changeLanguage('en');
            }}
          />
          <Button
            title="FR"
            onPress={() => {
              i18n.changeLanguage('fr');
            }}
          />
          <Button
            title="GU"
            onPress={() => {
              i18n.changeLanguage('gu');
            }}
          />
          <Button
            title="HN"
            onPress={() => {
              i18n.changeLanguage('hi');
            }}
          />
        </View>
      </View>
      <Button
        title="Test Crashlytics"
        onPress={() => {
          crashlytics().crash();
        }}
      />
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
    </View>
  );
};

export default SettingsScreen;
