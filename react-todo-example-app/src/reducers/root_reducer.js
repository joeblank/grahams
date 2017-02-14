import { combineReducers } from 'redux';
import toDoReducer from './reducer_add_to_do';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  todo: toDoReducer
})

export default rootReducer;
