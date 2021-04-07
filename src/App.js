import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import CheckOut from './components/cart/checkout';
//import SimpleCart from './components/cart/simplecart';
//import Footer from './components/footer/footer'; */
import Header from './components/header/header';
//import Details from './components/products/details';
//import Categories from './components/storefront/categories'
//import CurrentCategory from './components/storefront/current-category'
//import Products from './components/storefront/products'
import StoreFront from './components/storefront/storefront'
import store from './store/index.js';


function App() {
  return (
    <Provider store={store()}>
      <Header />
      <StoreFront />
    </Provider>
  );
}


export default App;
