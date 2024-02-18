import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 5,
  },
  imageContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'orange',
    marginLeft: 70,
  },
  camera: {
    left: -50,
    alignSelf: 'flex-end',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 50,
  },
  contentContainer: {
    flex: 1,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 15,
    top: 0,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    marginVertical: 8,
    backgroundColor: 'white',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    marginVertical: 2,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {fontSize: 15, fontWeight: 'bold'},
});

export default styles;
