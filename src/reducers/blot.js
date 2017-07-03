import { INKBLOT_GET, INKBLOT_RESULT } from '../constants/ActionTypes';

export default function blot(state, action) {
  if (typeof state === "undefined") {
    return {
      url: "/inkblots/blot/1/0",
      requestInProgress: false
    };
  }
  switch (action.type) {
    case INKBLOT_GET:
      return Object.assign({}, state, {
        requestInProgress: true
      });
    case INKBLOT_RESULT:
      return Object.assign({}, state, {
        requestInProgress: false,
        url: action.blot.url
      });
    default:
      return state;
  }
};
