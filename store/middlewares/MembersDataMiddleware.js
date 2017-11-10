import Action from "./../actions/Actions";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export default class MembersDataMiddleware {

    static getMembersData(value) {

        var obj;
        var obj2;

        console.log("test ", value);
        console.log(value.members);
        console.log(Object.keys(value.members))
        return (dispatch) => {
            let membersData = [];
            let members = value.members;
            // Object.keys(value.members).map((data, ind) => {
            for (let key in members) {
                firebase.database().ref('/users/' + members[key].uid).on("value", function (snapshot) {
                    // var allCircles = [];
                    // var keys = [];


                    obj = snapshot.val();
                    membersData.push(obj);
                    // console.log(obj,'member details');

                })
                // })
            }
            console.log(membersData, "all members details");
            setTimeout(() => {
                dispatch(Action.membersData(membersData));

            }, 2000);
        }

    }
}
