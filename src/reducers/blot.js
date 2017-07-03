import { REQUEST_NEXT, RECEIVE_NEXT } from '../constants/ActionTypes';

export default function blot(state, action) {
  if (typeof state === "undefined") {
    return {
      url: "/inkblots/blot/1/0",
      requestInProgress: false
    };
  }
  switch (action.type) {
    case REQUEST_NEXT:
      return Object.assign({}, state, {
        requestInProgress: true
      });
    case RECEIVE_NEXT:
      return Object.assign({}, state, {
        requestInProgress: false,
        url: action.data.url
      });
    default:
      return state;
  }
};
