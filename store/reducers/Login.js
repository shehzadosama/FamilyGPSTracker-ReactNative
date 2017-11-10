import Actions from "../actions/Actions";


const INITIAL_STATE = {
  loggedInUser: false
}


function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.LOGIN:

      return Object.assign({}, state, { loggedInUser: true });
      break;

    default:
      return state;
  }
}

export default Login;