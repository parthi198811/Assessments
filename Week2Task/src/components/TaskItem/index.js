import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './styles';

const TaskItem = ({item, removeTask}) => {
  const handleTaskDelete = () => {
    Alert.alert('Are you sure you want to delete this task?', '', [
      {text: 'No', onPress: () => {}},
      {
        text: 'Yes',
        onPress: () => {
          removeTask(item.id);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.dueDate}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            handleTaskDelete();
          }}>
          <Icon name="delete" color={'black'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(TaskItem);
