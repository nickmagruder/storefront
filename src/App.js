import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
//import CheckOut from './components/cart/checkout';
import SimpleCart from './components/cart/simplecart';
import Footer from './components/footer/footer';
import Header from './components/header/header';
//import Details from './components/products/details';
//import CurrentCategory from './components/storefront/current-category'
import Products from './components/storefront/products'
// import StoreFront from './components/storefront/products'
import store from './store/index.js';


function App() {
  return (
    <Provider store={store()}>
      <Header />
      <div>
        {/*         <Route exact path="/" component = {Products} /> */}
        <Products />
      </div>
      <Footer />
    </Provider>
  );
}


export default App;
