import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 5,
    padding: 10,
    height: 170,
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
    width: 100,
    height: 100,
  },
  textContainer: {
    justifyContent: 'flex-start',
    width: '73%',
    justifyContent: 'space-between',
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  text1: {fontSize: 15},
  text2: {fontSize: 15, fontWeight: 'bold', color: 'green'},
  text3: {fontSize: 20, fontWeight: 'bold'},
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    alignItems: 'center',
  },
});

export default styles;
