import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#D8D8D8'},
  listContainer: {flex: 1},
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E8E9E6',
    padding: 10,
  },
  checkoutContainer: {
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
  },
  checkoutText: {fontSize: 20, fontWeight: 'bold'},
  bottomText: {fontSize: 18, fontWeight: 'bold', padding: 10},
  bottomValueText: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});

export default styles;
