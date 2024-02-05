import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    height: 50,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4287f5',
  },
  leftContainer: {flexDirection: 'row', flex: 1},
  rightContainer: {flexDirection: 'row'},
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 2,
    color: 'white',
  },
  headerButton: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    tintColor: 'white',
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
