import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {CHAT_COLLECTION, MESSAGE_COLLECTION} from '../constants';

const useRealtimeChats = (srcUser, destUser, orderBy, limit = undefined) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let collectionKey = [srcUser, destUser];
    collectionKey.sort();

    try {
      let reference = firestore()
        .collection(CHAT_COLLECTION)
        .doc(collectionKey.join('-'))
        .collection(MESSAGE_COLLECTION)
        .orderBy(orderBy.field, orderBy.type);

      if (limit) reference.limit(limit);

      reference.onSnapshot(messages => {
        let data = [];
        messages.forEach(message =>
          data.push({id: message.id, ...message.data()}),
        );
        setResults(data);
        setLoading(false);
      });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  return {results, error, loading};
};

export default useRealtimeChats;
