import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

const configureStore = () => {
  const middleware = [
    thunkMiddleware
  ];
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }

  return  createStore(
    reducer,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
