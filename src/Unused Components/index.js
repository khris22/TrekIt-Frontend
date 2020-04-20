// UNUSED COMPONENT
// Still firguring out combine reducers

import { combineReducers } from 'redux';
// import locations from './manageLocation';
// import adventures from './manageAdventure';
import locationReducer from '../reducers/locationReducer';
import adventureReducer from './adventureReducer';

export default combineReducers({
  locationReducer,
  adventureReducer,
});
