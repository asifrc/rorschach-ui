import { INKBLOT_GET, INKBLOT_RESULT } from '../constants/ActionTypes';
import InkBlotsAPI from '../api/inkblots'

const api = new InkBlotsAPI();

function getNext(data) {
  return {
    type: INKBLOT_GET
  };
};

function nextResponse(blot) {
  blot.description = "";
  return {
    type: INKBLOT_RESULT,
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

