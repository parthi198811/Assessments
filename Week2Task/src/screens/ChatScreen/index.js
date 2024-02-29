import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import IconE from 'react-native-vector-icons/dist/Entypo';
import IconM from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/dist/FontAwesome5';
import {FirestoreHelper} from '@helpers';
import {useUserContext} from '../../contexts/UserContext';
import useRealtimeChats from '../../hooks/useRealtimeChats';
import DocumentPicker from 'react-native-document-picker';
import {FirebaseStorageHelper} from '../../helpers';
import FileViewer from 'react-native-file-viewer';
import MessageView from './MessageView';

const ChatScreen = ({route}) => {
  const destinationUser = route.params.item;
  const loggedInUser = useUserContext().state.loggedInUser;

  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);

  const [loading, setLoading] = useState(false);
  const [localCopyFile, setLocalCopyFile] = useState('');

  const scrollViewRef = useRef(null);
  const {results} = useRealtimeChats(loggedInUser?.id, destinationUser.id, {
    field: 'time',
    type: 'asc',
  });

  const messages = results;

  const sendMessage = () => {
    if (loggedInUser) {
      const msgObject = {
        ...attachment,
        text: message,
        sentBy: loggedInUser.id,
      };
      FirestoreHelper.sendMessage(
        loggedInUser.id,
        destinationUser.id,
        msgObject,
      );
      setMessage('');
      setAttachment(null);
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
                  <MessageView
                    message={message}
                    loggedInUserId={loggedInUser?.id}
                  />
                );
              })}
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.textInput}>
            <TextInput
              style={{flex: 1}}
              value={message}
              multiline={true}
              onChangeText={value => {
                setMessage(value);
              }}
            />
            {loading ? (
              <ActivityIndicator />
            ) : attachment ? (
              <TouchableOpacity
                onPress={async () => {
                  await FileViewer.open(localCopyFile);
                }}>
                <IconF name="file-alt" color={'#000080'} size={25} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={async () => {
                  setLoading(true);
                  try {
                    const pickerResult = await DocumentPicker.pickSingle({
                      presentationStyle: 'formSheet',
                      copyTo: 'cachesDirectory',
                    });

                    setLocalCopyFile(pickerResult.fileCopyUri);

                    const file = await FirebaseStorageHelper.uploadFile(
                      pickerResult.fileCopyUri,
                      pickerResult.name,
                    );

                    setLoading(false);

                    setAttachment({
                      name: file.name,
                      url: file.url,
                      type: pickerResult.type,
                    });
                  } catch (e) {
                    handleError(e);
                  }
                }}>
                <IconE name="attachment" color={'grey'} size={25} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity onPress={sendMessage}>
            <IconM name="send-circle-outline" color={'#1c1c84'} size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
