import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import './style/style.css';
import reducer from './reducers'
import AppRoutes from './routes'
import thunk from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({reducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
console.log(store.getState())

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
    <AppRoutes/></Provider>, document.getElementById('root'));

}

registerServiceWorker();
