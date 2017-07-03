import { REQUEST_NEXT, RECEIVE_NEXT } from '../constants/ActionTypes';
import InkBlotsAPI from '../api/inkblots'

const api = new InkBlotsAPI();

function requestNext(data) {
  return {
    type: REQUEST_NEXT
  };
};

function receiveNext(blot) {
  return {
    type: RECEIVE_NEXT,
    blot
  };
};

export function fetchNext() {
  return function(dispatch) {
    dispatch(requestNext());
    api.getRandomBlot( blot => {
      dispatch(receiveNext(blot));
    });
  };
};

