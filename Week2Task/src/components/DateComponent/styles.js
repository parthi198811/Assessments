import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  dateContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    flexDirection: 'row',
  },
  dateText: {
    flex: 1,
    padding: 10,
  },
  dateButton: {
    padding: 2,
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 15,
    top: -9,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
