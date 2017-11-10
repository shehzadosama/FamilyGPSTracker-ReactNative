import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export default class SignUpMiddleware {

    static signUp(data) {
        var database = firebase.database().ref("/");

        console.log("test ", data);
        return (dispatch) => {
            firebase.auth().createUserWithEmailAndPassword(data.email, data.pass).then((res) => {

                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('/users/' + userId).set({
                    fName: data.fName,
                    lName: data.lName,
                    email: data.email,
                    pass: data.pass
                });
                alert("account created successfully");
                Actions.Dashboard_Container();
            }
            ).catch(function (error) {
                // Handle Errors here.

                alert(error);

            });











        }
    }
}
