import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'orange',
    padding: '10',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  contentContainer: {flex: 1},
  footerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'orange',
  },
  footerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  drawerItem: {fontSize: 18},
});

export default styles;
