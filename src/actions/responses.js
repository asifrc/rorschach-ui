import { RESPONSES_GET, RESPONSES_RESULT, RESPONSE_SEND } from '../constants/ActionTypes';
import ResponseAPI from '../api/responses'
import { fetchNext } from './next';

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

function sendResponse(data) {
  return {
    type: RESPONSE_SEND,
    data
  };
};

export function saveResponse(response) {
  return function(dispatch) {
    dispatch(sendResponse(response));
    api.saveResponse(response, () => {
      dispatch(fetchNext());
      dispatch(fetchAll());
    });
  };
};
