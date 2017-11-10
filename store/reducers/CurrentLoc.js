
import Actions from "../actions/Actions";

const INITIAL_STATE = {
  currentLoc: null
}


function CurrentLoc(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.LOC:

     
      console.log('In Current location reducer')
      return Object.assign({}, state, { currentLoc: action.value });
      break;

    case Actions.UPDATE_LOC:
      console.log('In Current location reducer')
      return Object.assign({}, state, { currentLoc: action.value });
      break;
    

    default:
      return state;
  }
}

export default CurrentLoc;