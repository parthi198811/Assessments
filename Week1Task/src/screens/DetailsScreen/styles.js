import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 5,
  },
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: '60%', height: 180},
  headercontainer: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext: {
    fontSize: 30,
    fontWeight: 'bold',
    fontVariant: 'small-caps',
    color: 'white',
  },
  detailscontainer: {padding: 10, alignItems: 'center'},
  detailstext: {
    fontSize: 20,
    color: 'white',
  },
  datacontainer: {flex: 1, padding: 10},
});

export default styles;
