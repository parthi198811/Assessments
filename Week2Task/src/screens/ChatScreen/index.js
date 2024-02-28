import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import IconM from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {FirestoreHelper} from '@helpers';
import {useUserContext} from '../../contexts/UserContext';

const ChatScreen = ({route}) => {
  const destinationUser = route.params.item;
  const loggedInUser = useUserContext().state.loggedInUser;

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const scrollViewRef = useRef(null);

  useEffect(() => {
    FirestoreHelper.getRealtimeMessages(
      loggedInUser?.id,
      destinationUser.id,
      setMessages,
    );
  }, []);

  const sendMessage = () => {
    if (loggedInUser) {
      const msgObject = {
        text: message,
        sentBy: loggedInUser.id,
      };
      FirestoreHelper.sendMessage(
        loggedInUser.id,
        destinationUser.id,
        msgObject,
      );
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{destinationUser.name}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.messageContainer}>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({animated: true})
            }>
            {messages &&
              messages.map(message => {
                return (
                  <View
                    style={
                      message.sentBy == loggedInUser.id
                        ? styles.sentContainer
                        : styles.receiveContainer
                    }>
                    <Text style={styles.text}>{message.text}</Text>
                    <Text style={styles.time}>
                      {new Date(message.time).toLocaleString()}
                    </Text>
                  </View>
                );
              })}
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <TextInput
            style={styles.textInput}
            value={message}
            onChangeText={value => {
              setMessage(value);
            }}
          />
          <TouchableOpacity onPress={sendMessage}>
            <IconM name="send-circle-outline" color={'black'} size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
