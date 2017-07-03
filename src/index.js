import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { connect, Provider } from 'react-redux'
import $ from 'webpack-zepto'

import InkBlot from './components/InkBlot'

const loggerMiddleware = createLogger();

function blot(state, action) {
  if (typeof state === "undefined") {
    return {
      url: "/inkblots/blot/1/0",
      requestInProgress: false
    };
  }
  switch (action.type) {
    case "REQUEST_NEXT":
      return Object.assign({}, state, {
        requestInProgress: true
      });
    case "RECEIVE_NEXT":
      return Object.assign({}, state, {
        requestInProgress: false,
        url: action.data.url
      });
    default:
      return state;
  }
};


const mapStateToProps = state => {
  return {
    url: state.url
  };
};
const store = createStore(blot, applyMiddleware(loggerMiddleware))
const InkBlotPanel = connect(mapStateToProps)(InkBlot);

class NextButton extends React.Component {
  loadNext() {
    store.dispatch({
      type: "REQUEST_NEXT"
    });
    $.get('/inkblots', data => {
         store.dispatch({
           type: "RECEIVE_NEXT",
           data
         });
      });
  };

  render() {
    return (
      <button onClick={this.loadNext}>Next</button>
    );
  };
};

class InkBlotCard extends React.Component {
  render() {
    return (
        <div>
          <InkBlotPanel />
          <textarea></textarea>
          <NextButton />
        </div>
    );
  };
}


ReactDOM.render(
  <Provider store={store}>
    <InkBlotCard />
  </Provider>
  ,
  document.getElementById('root')
);
