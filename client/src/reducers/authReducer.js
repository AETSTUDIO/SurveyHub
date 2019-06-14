import { FETCH_USER } from "../actions/types";

const initailState = {
  auth: null
}

export default function(state = initailState, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
