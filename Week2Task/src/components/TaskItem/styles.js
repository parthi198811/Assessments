import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {fontSize: 25, fontWeight: 'bold', color: 'darkblue'},
  description: {fontSize: 15},
  date: {fontSize: 18, fontWeight: 'bold', color: 'red'},
});

export default styles;
