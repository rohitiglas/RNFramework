// store.js
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer'; // You need to create this
import {appRootSaga} from './sagas/rootSaga';

// Import your sagas here

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run your root saga
sagaMiddleware.run(appRootSaga);

export default store;
