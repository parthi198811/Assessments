import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  mainContainer: {
    flex: 1,
    marginVertical: 100,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  loginContainer: {
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
    padding: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  textContainer: {marginVertical: 10},
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  textinput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    height: 40,
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
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  registerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  registerButton: {fontSize: 18, color: 'blue'},
});

export default styles;
