import {Platform, StyleSheet} from 'react-native';
import {BASE_COLOR} from '../../constants';

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {justifyContent: 'center', alignItems: 'center'},
  headerText: {fontSize: 25, fontWeight: 'bold', color: BASE_COLOR},
  mainContainer: {flex: 1, margin: 5},
  messageContainer: {flex: 1},
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 5,
    paddingVertical: Platform.OS == 'ios' ? 5 : 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sentContainer: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    alignSelf: 'flex-end',
  },
  receiveContainer: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#eae2b7',
    alignSelf: 'flex-start',
  },
  sentDocument: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  receiveDocument: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  text: {
    fontSize: 15,
  },
  time: {
    margin: 2,
    fontSize: 12,
    color: 'grey',
    alignSelf: 'flex-end',
  },
});

export default styles;
