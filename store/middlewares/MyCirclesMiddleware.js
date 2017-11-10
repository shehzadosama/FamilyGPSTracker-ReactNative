import Action from "./../actions/Actions";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export default class MyCirclesMiddleware {

    static getMyCircles() {

        var obj;
        var obj2;
        // console.log("test ", data);
        return (dispatch) => {
            var existCircle = [];
            firebase.database().ref('/circles/').once("value", function (snapshot) {
                var allCircles = [];
                var keys = [];
                obj = snapshot.val();
                console.log(obj, "ALL CIRCLES");
                // var arr = Object.keys(obj);
                // console.log(arr);
                // for (let key in obj) {
                //     allCircles.push(obj[key]);
                //     keys.push(key);
                // }
                // console.log(allCircles);
                // console.log(keys);
                // arr.map((groupKey) => {

                // existCircle.push({name:'a',age:'20'});
                // existCircle.push({name:'b',age:'21'});
                for (let key in obj) {
                    var uid = firebase.auth().currentUser.uid;
                    var i = 0;
                    var rootRef = firebase.database().ref('/circles/' + key + '/members').orderByChild("uid").equalTo(uid);
                    if (rootRef != null) {
                        rootRef.on("value", snapshot => {
                            obj2 = snapshot.val();
                            console.log(obj2, "obj2");
                            if (obj2 !== null) {
                                existCircle.push(obj[key]);
                            }
                            console.log(existCircle);
                        })
                    }
                }
                console.log(existCircle, "wo groups jis me add h");
                setTimeout(() => {
                    dispatch(Action.myCircles(existCircle));

                }, 1000);
            })
        }
    }
}
