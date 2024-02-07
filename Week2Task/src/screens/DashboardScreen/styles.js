import {StyleSheet} from 'react-native';
import {BASE_COLOR} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {flex: 1},
  drawer: {marginRight: 10},
  headerContainer: {
    height: 50,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: BASE_COLOR,
  },
  leftContainer: {flexDirection: 'row', flex: 1},
  rightContainer: {flexDirection: 'row'},
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 2,
    color: 'white',
  },
  banner: {width: '100%', height: 200},
  contentContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default styles;
