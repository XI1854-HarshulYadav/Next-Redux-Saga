import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import logger from 'redux-logger';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const makeStore = context => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

const wrapper = createWrapper(makeStore)

export default wrapper