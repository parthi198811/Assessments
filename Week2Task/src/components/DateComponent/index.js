import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';

const DateComponent = props => {
  const {label, value, setDateValue, customStyle} = props;

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (value) {
      const parts = value.split('/');
      setDate(new Date(parts[2], parts[1] - 1, parts[0]));
    }
  }, []);

  useEffect(() => {
    if (!value) {
      setDate(new Date());
    }
  }, [value]);

  useEffect(() => {
    setDateValue(date.toLocaleDateString());
  }, [date]);

  return (
    <View style={[styles.container, customStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setOpen(true)}>
          <Icon name="calendar" color={'black'} size={30} />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default memo(DateComponent);
