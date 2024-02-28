import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert, Platform} from 'react-native';
import {ERROR_WRONG_CREDENTIALS} from '../constants';

class FirebaseAuthHelper {
  constructor() {
    GoogleSignin.configure({
      webClientId:
        Platform.OS == 'android'
          ? '819487030772-bg6isfnubto4gd1e69i8q32fsqg6k1ic.apps.googleusercontent.com'
          : '819487030772-gcrntd49rknv4opqr6sc2r6tap45iqn6.apps.googleusercontent.com',
    });
  }

  onGoogleSignIn = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  signup = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else if (error.code === 'auth/weak-password') {
          Alert.alert('The given password is invalid!');
        } else {
          Alert.alert(error);
        }
      });
  };

  login = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-credential') {
          Alert.alert(
            ERROR_WRONG_CREDENTIALS.title,
            ERROR_WRONG_CREDENTIALS.message,
          );
        } else {
          Alert.alert(error.message);
        }
      });
  };

  logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  forgotPassword = email => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => console.log('Password reset email sent'))
      .catch(error => {
        console.log(error);
      });
  };
}

export default new FirebaseAuthHelper();
