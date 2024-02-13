import {View, Text, TouchableOpacity, Alert, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import NewTask from '../NewTask';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import PersistentHelper from '@helpers/PersistentHelper';
import {TASKS_KEY} from '@constants';
import TaskItem from '@components/TaskItem';

const TaskScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    PersistentHelper.getObject(TASKS_KEY).then(data => {
      data ? setTasks(data) : setTasks([]);
    });
  }, []);

  useEffect(() => {
    PersistentHelper.setObject(TASKS_KEY, tasks);
  }, [tasks]);

  const updateTasks = task => {
    task.id = tasks.length + 1;
    setTasks([task, ...tasks]);
  };

  const removeTask = taskId => {
    const index = tasks.findIndex(element => {
      return element.id == taskId;
    });

    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList
          data={tasks}
          renderItem={({item}) => {
            return <TaskItem item={item} removeTask={removeTask} />;
          }}
          keyExtractor={item => {
            item.id;
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Icon name="add-task" size={25} />
          <Text style={styles.buttonText}>New Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert('Are you sure you want to delete all tasks?', '', [
              {text: 'No', onPress: () => {}},
              {
                text: 'Yes',
                onPress: () => {
                  setTasks([]);
                },
              },
            ]);
          }}>
          <Icon name="delete-forever" size={25} />
          <Text style={styles.buttonText}>Delete Tasks</Text>
        </TouchableOpacity>
      </View>
      <NewTask
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        updateTasks={updateTasks}
      />
    </View>
  );
};

export default TaskScreen;
