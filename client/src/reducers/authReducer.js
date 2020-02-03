import { FETCH_USER } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FETCH_USER:
    // if payload = '', in js it means false
      return action.payload || false;
    default:
      return state;
  }
}
