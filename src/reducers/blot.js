import { GET, RESPONSE } from '../constants/ActionTypes';

export default function blot(state, action) {
  if (typeof state === "undefined") {
    return {
      url: "/inkblots/blot/1/0",
      requestInProgress: false
    };
  }
  switch (action.type) {
    case GET:
      return Object.assign({}, state, {
        requestInProgress: true
      });
    case RESPONSE:
      return Object.assign({}, state, {
        requestInProgress: false,
        url: action.blot.url
      });
    default:
      return state;
  }
};
