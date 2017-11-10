import Action from "./../actions/Actions";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

export default class LoginMiddleware {

    static currentLoc() {
        return (dispatch) => {

            console.log('in current loc middleware');
            navigator.geolocation.getCurrentPosition(

                (position) => {
                    
                    var uid = firebase.auth().currentUser.uid;
                    
            //         user.updateProfile({
            // //    latitude: parseFloat(position.coords.latitude),
            // //    longitude: parseFloat(position.coords.longitude),
            //         a: 'aaa'
            //         }).then(function() {
            //           console.log('update success');
            //         }).catch(function(error) {
            //             console.log(error);
            //         });
            firebase.database().ref('/users/' + uid).update({
                latitude: parseFloat(position.coords.latitude),
                   longitude: parseFloat(position.coords.longitude),
            });
            setTimeout(() => {
                    dispatch(Action.setCurrentLoc({

                        latitude: parseFloat(position.coords.latitude),
                        longitude: parseFloat(position.coords.longitude),
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }));
                    
                }, 1000);
                },
                (error) => {

                    console.log(error);


                },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },


            )



        }
    }
};












