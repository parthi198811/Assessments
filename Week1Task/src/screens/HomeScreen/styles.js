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
  buttonContainer: {
    backgroundColor: '#0066cc',
    alignItems: 'flex-end',
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  listContainer: {flex: 1, padding: 5},
  modalContainer: {
    marginHorizontal: 20,
    marginVertical: 80,
    padding: 10,
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
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  submit: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d8dfa',
    width: 100,
  },
  cancel: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 100,
  },
});

export default styles;
