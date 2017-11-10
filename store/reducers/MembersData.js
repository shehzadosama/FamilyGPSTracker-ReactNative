
import Actions from "../actions/Actions";

const INITIAL_STATE = {
    membersData: []
}


function MembersData(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Actions.MEMBERS_DATA:


            console.log('In Members Data reducer');
            return {...state,membersData: action.value  };
            //  Object.assign({}, state, { myCircles: action.value });
            break;




        default:
            return state;
    }
}

export default MembersData;