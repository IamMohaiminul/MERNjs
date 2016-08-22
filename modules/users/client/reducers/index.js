import {
  combineReducers
} from 'redux';
import {
  allUserReducer
} from './all-user';
import {
  activeUserReducer
} from './active-user';

const userReducers = combineReducers({
  users: allUserReducer,
  activeUser: activeUserReducer
});

export default userReducers;
