import Action from "./../actions/Actions";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export default class LoginMiddleware {

  static login(data) {
    var database = firebase.database().ref("/");

    console.log("test ", data);
    return (dispatch) => {


      console.log(data.email, data.pass);
      firebase.auth().signInWithEmailAndPassword(data.email, data.pass).then((res) => {

        Actions.Dashboard_Container();
        // dispatch(Action.loginUser(data));
        // dispatch(Action.loginUser());
      }
      ).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {

          alert("Wrong password.");
        } else if (errorMessage) {

          alert(errorMessage);

        }
      });











    }
  }
}
