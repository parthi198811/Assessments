import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  button: {
    margin: 2,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {padding: 2, fontSize: 15, fontWeight: 'bold'},
  listItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default styles;
