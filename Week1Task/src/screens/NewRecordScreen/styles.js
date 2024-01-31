import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 5,
    backgroundColor: '#e5e5e5',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
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
  submitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // height: 50,
    // backgroundColor: 'black',
  },
  submit: {
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    flex: 1,
  },
  cancel: {
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    flex: 1,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  error: {
    fontSize: 12,
    color: 'red',
    padding: 2,
  },
});

export default styles;
