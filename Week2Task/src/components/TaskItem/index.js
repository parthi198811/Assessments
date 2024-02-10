import {View, Text} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

const TaskItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.dueDate}</Text>
    </View>
  );
};

export default memo(TaskItem);
