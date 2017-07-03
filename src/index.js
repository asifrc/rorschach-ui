import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'

import configureStore from './configureStore'
import InkBlot from './components/InkBlot'
import { fetchNext } from './actions/next'


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

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <InkBlotPanel />
  </Provider>
  ,
  document.getElementById('root')
);
