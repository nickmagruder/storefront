import React from 'react';
import ReactDOM from 'react-dom';
/* import { Provider } from 'react-redux'; */
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CartReducer from '../src/store/cart';
import categoriesReducer from './store/cart';
import productsReducer from '../src/store/products';
import { Provider } from 'react-redux';
import store from './store/index.js';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const reducers = combineReducers({ CartReducer: CartReducer, categoriesReducer: categoriesReducer, productsReducer: productsReducer }); 

const store = () => {
  return createStore(reducers, composeWithDevTools()); 
}

export default store;



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
