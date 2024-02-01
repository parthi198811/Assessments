import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#8ae5ff'},
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  headerContent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000080',
    fontVariant: 'small-caps',
  },
  bottomContainer: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    margin: 3,
    width: 20,
    height: 20,
  },
  listContainer: {flex: 1, padding: 5},
});

export default styles;
