import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  mainContainer: {flex: 1},
  bottomContainer: {
    backgroundColor: '#E8E9E6',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {padding: 2, fontSize: 15, fontWeight: 'bold'},
});

export default styles;
