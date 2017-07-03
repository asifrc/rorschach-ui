import { REQUEST_NEXT, RECEIVE_NEXT } from '../constants/ActionTypes';

export function requestNext() {
  return {
    type: REQUEST_NEXT
  };
};

export function receiveNext(data) {
  return {
    type: RECEIVE_NEXT,
    data
  };
};
