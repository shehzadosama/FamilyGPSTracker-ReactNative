import Action from "./../actions/Actions";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export default class CreateCircleMiddleware {

    static createCircle(value) {
        // var database = firebase.database().ref("/");

        // console.log("test ", data);
        return (dispatch) => {

            var myRef = firebase.database().ref().push();
            var key = myRef.getKey();
           var keyStr= key.toString();
            console.log(keyStr.slice(0, 7));
           var invitation_code= keyStr.slice(0, 7);
            // ref.push(
                 
            //     value
              
            //     );
                firebase.database().ref('/circles/' + key).set({
                 adminName:  value.admin,
                 circleName:  value.circleName,
                 adminUid:  value.uid,
                 invitation_code:invitation_code
                  }); 
                  firebase.database().ref('/circles/' + key+'/members').push({
                    // admin:  value.admin,
                    // circleName:  value.circleName,
                    uid:  value.uid,
                    // invitation_code:invitation_code
                     });

                     


              alert("Group Created Successflly");





        }
    }
}
