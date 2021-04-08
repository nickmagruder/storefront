
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
/* import CartReducer from '../src/store/cart'; */
import categoriesReducer from './categories'
import productsReducer from './products'

import thunk from 'redux-thunk';

const reducers = combineReducers({ 
/*   CartReducer: CartReducer,  */
  categoriesReducer: categoriesReducer, 
  productsReducer: productsReducer 
}); 

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk))); 
}



export default store;



