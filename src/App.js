import React, { Component } from 'react';

//import CheckOut from './components/cart/checkout';
//import SimpleCart from './components/cart/simplecart';
//import Footer from './components/footer/footer'; */
import Header from './components/header/header';
//import Details from './components/products/details';
//import Categories from './components/storefront/categories'
//import CurrentCategory from './components/storefront/current-category'
//import Products from './components/storefront/products'
import StoreFront from './components/storefront/storefront'



class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <StoreFront />
      </div>
    );
  }
}

export default App;
