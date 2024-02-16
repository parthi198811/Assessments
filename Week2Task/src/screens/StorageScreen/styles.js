import {StyleSheet} from 'react-native';
import {BASE_COLOR} from '../../constants';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 5},
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 5,
  },
  contentContainer: {
    flex: 1,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  textinput: {borderWidth: 1, padding: 10, margin: 5},
  buttonContainer: {flexDirection: 'row', justifyContent: 'space-around'},
  button: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: BASE_COLOR,
    padding: 10,
  },
});

export default styles;
