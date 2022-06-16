import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';

import combinedReducers from './repos';
import sagas from './sagas';

const sagaMiddleware = createSaga();

export default createStore(
  combinedReducers,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);
