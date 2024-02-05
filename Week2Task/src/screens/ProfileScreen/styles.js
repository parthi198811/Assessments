import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#D8D8D8',
  },
  image: {width: 150, height: 150},
  headerText: {fontSize: 35, fontWeight: 'bold', color: '#000080', margin: 20},
  mobileText: {fontSize: 25, fontWeight: 'bold', color: '#000080', margin: 10},
  emailText: {fontSize: 25, fontWeight: 'bold', color: 'blue', margin: 10},
});

export default styles;
