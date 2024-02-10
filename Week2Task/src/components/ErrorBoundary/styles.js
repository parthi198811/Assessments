import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
  },
  title: {fontSize: 20, fontWeight: 'bold', color: 'red'},
  error: {fontSize: 18, fontWeight: 'bold'},
  errorInfo: {flex: 1, fontSize: 15},
});

export default styles;
