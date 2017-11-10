import Action from "./../actions/Actions";
import { AsyncStorage } from 'react-native';
// import * as firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
export default class UpdateLocationMiddleware {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //       //  input: "",
    //       //  date: "",
    //       error: null,
    //       region:null
    //     };

    //   }
    static currentLoc(location) {
        return (dispatch) => {
            // this.state = {
            //     //  input: "",
            //     //  date: "",
            //     error: null,
            //     region:null
            //   };
            // var region = null;
            console.log('in update loc middleware');
            var obj = {
                latitude: location.lat,
                longitude:  location.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            };
            dispatch(Action.updateCurrentLoc(obj));
            // console.log(region),
            // dispatch(Action.setCurrentLoc(this.state.region))


        }
    }
};












