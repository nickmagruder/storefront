
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cart.js';
import categoriesReducer from './categories.js'
import productsReducer from './products.js'


import thunk from 'redux-thunk';


const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});


const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk))); 
}



export default store;



