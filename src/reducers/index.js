import { combineReducers } from 'redux';
import blot from './blot';
import responses from './responses';

const rootReducer = combineReducers({
  blot,
  responses
});

export default rootReducer;
