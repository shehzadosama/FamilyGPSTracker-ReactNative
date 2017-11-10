
import Actions from "../actions/Actions";

const INITIAL_STATE = {
  currentUser: null
}


function CurrentUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.CURRENT_USER:

     
      console.log('In Current user reducer')
      return Object.assign({}, state, { currentUser: action.value });
      break;

    
    

    default:
      return state;
  }
}

export default CurrentUser;