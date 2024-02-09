import {StyleSheet} from 'react-native';
import {BASE_COLOR} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 5,
    padding: 10,
    height: 150,
    borderRadius: 2,
    backgroundColor: 'white',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    justifyContent: 'flex-start',
    width: '73%',
    justifyContent: 'space-between',
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  text1: {fontSize: 15},
  text2: {fontSize: 15, fontWeight: 'bold'},
  text3: {fontSize: 20, fontWeight: 'bold', color: 'green'},
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: BASE_COLOR,
  },
  qtyView: {
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 15,
  },
});

export default styles;
