import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 120,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#e5e5e5',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  headerContainer: {
    height: 50,
    borderRadius: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    fontVariant: 'small-caps',
  },
  contentcontainer: {
    padding: 10,
    flex: 1,
  },
  required: {
    fontSize: 18,
    color: 'red',
    marginTop: 8,
  },
  labelcontainer: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textinput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  error: {
    fontSize: 12,
    color: 'red',
    padding: 2,
  },
});

export default styles;
