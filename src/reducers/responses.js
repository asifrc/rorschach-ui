import { RESPONSES_GET, RESPONSES_RESULT } from '../constants/ActionTypes';


export default function responses(state, action) {
  if (typeof state === "undefined") {
    return {
      inkblots: [],
      requestInProgress: false
    };
  }
  switch (action.type) {
    case RESPONSES_GET:
      return Object.assign({}, state, {
        requestInProgress: true
      });
    case RESPONSES_RESULT:
      return Object.assign({}, state, {
        requestInProgress: false,
        inkblots: action.responses.inkblots.map( response => (
          {
            id: response.id,
            url: response.image,
            description: response.description
          }
        ))
      });
    default:
      return state;
  }
};
