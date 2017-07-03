import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { connect, Provider } from 'react-redux'

import InkBlot from './components/InkBlot'
import reducer from './reducers'
import { fetchNext } from './actions/next'

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
const mapStateToProps = state => {
  return {
    url: state.blot.url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadNext: () => dispatch(fetchNext())
  };
};
const InkBlotPanel = connect(mapStateToProps, mapDispatchToProps)(InkBlot);

ReactDOM.render(
  <Provider store={store}>
    <InkBlotPanel />
  </Provider>
  ,
  document.getElementById('root')
);
