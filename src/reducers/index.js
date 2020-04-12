import { combineReducers } from 'redux';
import locations from './manageLocation';
import adventures from './manageAdventure';

export default combineReducers({
  locations,
  adventures,
});
