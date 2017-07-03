import { RESPONSES_GET, RESPONSES_RESULT } from '../constants/ActionTypes';
import ResponseAPI from '../api/responses'

const api = new ResponseAPI();

function getResponses(data) {
  return {
    type: RESPONSES_GET
  };
};

function receiveResponses(responses) {
  return {
    type: RESPONSES_RESULT,
    responses
  };
};

export function fetchAll() {
  return function(dispatch) {
    dispatch(getResponses());
    api.getAllResponses( inkblots => {
      dispatch(receiveResponses({inkblots}));
    });
  };
};

