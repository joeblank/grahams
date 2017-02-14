import { ADD_TO_DO } from './../actions/index';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case ADD_TO_DO:
      return [action.payload, ...state];
    default:
      return state;
  }
}
