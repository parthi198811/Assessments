import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import IconF from 'react-native-vector-icons/dist/FontAwesome5';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';

const MessageView = ({message, loggedInUserId}) => {
  return (
    <View
      style={
        message.sentBy == loggedInUserId
          ? styles.sentContainer
          : styles.receiveContainer
      }>
      {message.url && (
        <TouchableOpacity
          style={
            message.sentBy == loggedInUserId
              ? styles.sentDocument
              : styles.receiveDocument
          }
          onPress={async () => {
            const localFile = `${RNFS.DocumentDirectoryPath}/` + message.name;
            RNFS.downloadFile({
              fromUrl: message.url,
              toFile: localFile,
            }).promise.then(() => {
              this.setState({isDone: true});
            });
            await FileViewer.open(localFile);
          }}>
          {message.type.startsWith('image') && (
            <Image
              source={{uri: message.url}}
              resizeMode="cover"
              style={{width: 150, height: 200}}
            />
          )}
          {message.type == 'application/pdf' && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <IconF name="file-pdf" color="red" size={30} />
              <Text style={{padding: 5}}>{message.name}</Text>
            </View>
          )}
          {message.type ==
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <IconF name="file-word" color="blue" size={30} />
              <Text style={{padding: 5}}>{message.name}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
      {message.text && <Text style={styles.text}>{message.text}</Text>}
      <Text style={styles.time}>{new Date(message.time).toLocaleString()}</Text>
    </View>
  );
};

export default MessageView;
