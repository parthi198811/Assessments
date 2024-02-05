import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  mainContainer: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  registerContainer: {
    flex: 1,
    backgroundColor: '#D8D8D8',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 3,
    padding: 10,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000080',
    fontVariant: 'small-caps',
  },
  errorText: {
    fontSize: 15,
    color: 'red',
    padding: 2,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  textContainer: {marginVertical: 5},
  labelcontainer: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 2,
  },
  textinput: {
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 2,
    height: 35,
  },
  button: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000080',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomContainer: {
    padding: 5,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  loginButton: {fontSize: 18, color: 'blue'},
  required: {
    fontSize: 18,
    color: 'red',
  },
});

export default styles;
