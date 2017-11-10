
import Actions from "../actions/Actions";

const INITIAL_STATE = {
    myCircles: []
}


function MyCircles(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Actions.MY_CIRCLES:


            console.log('In My circles reducer');
            return {...state,myCircles: action.value  };
            //  Object.assign({}, state, { myCircles: action.value });
            break;




        default:
            return state;
    }
}

export default MyCircles;