import Action from "./../actions/Actions";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export default class CurrentUserMiddleware {

    static getCurrentUser() {
        var database = firebase.database().ref("/");

        // console.log("test ", data);
        return (dispatch) => {

            firebase.auth().onAuthStateChanged(() => {


                if (firebase.auth().currentUser) {
                    // Actions.Dashboard_Container();
                    const userId = firebase.auth().currentUser.uid;
                    console.log(userId);
                    var user;
                    const rootRef = firebase.database().ref();
                    const speedRef = rootRef.child('users/' + userId);
                    speedRef.on('value', snap => {
                        user = snap.val()
                        console.log(user);
                        user.userId = userId;
                        dispatch(Action.currentUser(user));

                    });
                }
                else {
                    // this.setState({ loading: false })
                    // console.log("No user log in");
                }
            });








        }
    }
}
