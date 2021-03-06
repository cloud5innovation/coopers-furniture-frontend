import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './Store/Reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//UNCOMMENT WHEN IN DEVELOPMENT
// const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));




const app = ( <Provider store={store}> <Router> <App /> </Router> </Provider> )
ReactDOM.render( app, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
