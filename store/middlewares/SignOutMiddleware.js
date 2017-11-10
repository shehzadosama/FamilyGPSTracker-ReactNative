
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export default class SignOutMiddleware {

    static signOut() {
        var database = firebase.database().ref("/");


        return (dispatch) => {


            firebase.auth().signOut().then(function () {

                alert("signOut success");
                Actions.Login_Container();

            }).catch(function (error) {
                alert(error);
            });











        }
    }
}
