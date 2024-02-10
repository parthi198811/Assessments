import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';

const DateComponent = props => {
  const {setDateValue} = props;

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDateValue(date.toLocaleDateString());
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.dateText}
        value={date.toLocaleDateString()}
        readOnly={true}
      />
      <TouchableOpacity style={styles.dateButton} onPress={() => setOpen(true)}>
        <Icon name="calendar" color={'black'} size={30} />
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);

          setDateValue(date.toLocaleDateString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default memo(DateComponent);
