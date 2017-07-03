import { RESPONSES_GET, RESPONSES_RESULT } from '../constants/ActionTypes';


export default function responses(state, action) {
  if (typeof state === "undefined") {
    return {
      inkblots: [
        {
          url: "/inkblots/blot/10/0",
          description: "what do you think?"
      },
        {
          url: "/inkblots/blot/4/2",
          description: "what do I think?"
      }
      ],
      requestInProgress: false
    };
  }
    console.log(state,action);
  switch (action.type) {
    case RESPONSES_GET:
      return Object.assign({}, state, {
        requestInProgress: true
      });
    case RESPONSES_RESULT:
      return Object.assign({}, state, {
        requestInProgress: false,
        inkblots: state.inkblots.map( response => (
          {
            url: response.image,
            description: response.description
          }
        ))
      });
    default:
      return state;
  }
};
