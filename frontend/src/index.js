import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import './style/style.css';
import reducer from './reducers'
import App from './App'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';



const rootReducer = combineReducers({reducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
<BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
