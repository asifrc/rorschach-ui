import React from 'react';
import { Provider } from 'react-redux'
import InkBlotCard from './InkBlotCard'

const Root = ({store}) => (
  <Provider store={store}>
    <InkBlotCard />
  </Provider>
);

export default Root;
