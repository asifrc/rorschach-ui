import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { connect, Provider } from 'react-redux'
import $ from 'webpack-zepto'

import InkBlot from './components/InkBlot'
import reducer from './reducers'
import { requestNext, receiveNext } from './actions/next'

const loggerMiddleware = createLogger();

const mapStateToProps = state => {
  return {
    url: state.blot.url
  };
};
const store = createStore(reducer, applyMiddleware(loggerMiddleware))
const InkBlotPanel = connect(mapStateToProps)(InkBlot);

class NextButton extends React.Component {
  loadNext() {
    store.dispatch(requestNext());
    $.get('/inkblots', data => {
         store.dispatch(receiveNext(data));
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
