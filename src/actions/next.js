import { GET, RESPONSE } from '../constants/ActionTypes';
import InkBlotsAPI from '../api/inkblots'

const api = new InkBlotsAPI();

function getNext(data) {
  return {
    type: GET
  };
};

function nextResponse(blot) {
  return {
    type: RESPONSE,
    blot
  };
};

export function fetchNext() {
  return function(dispatch) {
    dispatch(getNext());
    api.getRandomBlot( blot => {
      dispatch(nextResponse(blot));
    });
  };
};

