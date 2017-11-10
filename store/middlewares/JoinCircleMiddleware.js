import Action from "./../actions/Actions";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export default class JoinCircleMiddleware {

    static joinCircle(value) {
        // var database = firebase.database().ref("/");
        var obj;
        var obj2;
        // console.log("test ", data);
        return (dispatch) => {
            // it checks whether the invitation code is valid or not
            firebase.database().ref('/circles/').orderByChild("invitation_code").equalTo(value.invitation_code).once("value", function (snapshot) {

                obj = snapshot.val();

                console.log(obj);

                if (obj === null) {
                    alert("Invalid Invitation Code");
                }
                else {
                    console.log(Object.keys(obj)[0]);    // array ka 1st element access krna h i.e. group key
                    var groupKey = Object.keys(obj)[0];
                    console.log(value.uid);
                    firebase.database().ref('/circles/' + groupKey + '/members').orderByChild("uid").equalTo(value.uid).once("value", function (snapshot) {
                        obj2 = snapshot.val();

                        console.log(obj2);
                        if (obj2 === null) {

                            firebase.database().ref('/circles/' + groupKey + '/members').push({
                                uid: value.uid
                            });
                            alert("added to group");

                        }
                        else {
                            alert("You are already a member of this group !!!!");

                        }
                    }
                    );
                }








            });

        }
    }
}
