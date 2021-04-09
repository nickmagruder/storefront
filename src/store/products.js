/* import * as actionTypes from './actions'; */
import axios from 'axios';

let initialState = {
  count: 0,
  activeProduct: '',
  productsList: []
  }

/* let initialState = {
count: 0,
activeProduct: '',
productList: [{
    _id: 243543475,
    category: 'bicycles',
    name: 'Haro BMX',
    description: 'Chrome, For sick wheelies ONLY',
    price: 300,
    quantity: 7,
    imageURL: '../../../img/haro.jpg'
  },
  {
    _id: 3454356567,
    category: 'bicycles',
    name: 'Pinarello Dogma Road Bike',
    description: 'Weights 2 pounds. Red Only, Spandex and attitude not included.',
    price: 13000,
    quantity: 2,
    imageURL: '../../../img/pinarello.jpg'
  },
  {
    _id: 9068773423,
    category: 'pets',
    name: 'Armadillo',
    description: 'Hard skin, soft heart',
    price: 100,
    quantity: 37,
    imageURL: '../../../img/armadillo.jpg'
  },
  {
    _id: 2342546756,
    category: 'pets',
    name: 'Cat',
    description: 'Assorted colors. Does what it wants. No returns or exchanges.',
    price: 1,
    quantity: 4762, 
    imageURL: '../../../img/cat.jpg'
  }]
} */

  export default function ProductsReducer(state = initialState, action) {
    const {type, payload} = action;
  

    switch(type) {
      case "LOAD_PRODUCTS":
        return {
          count: payload.count,
          productsList: payload.results,
        }

      case "PRODUCTS_ACTIVATED":
        const products = getProducts(payload.category);
        return {...state, products: products}
      default: 
      return state;
    }
  }
  

  export const productsLoader = () => (dispatch, getState) => {
    return axios.get('https://api-js401.herokuapp.com/api/v1/products')
    .then(response => {
      dispatch({
        type: 'LOAD_PRODUCTS',
        payload: response.data
      })
    })
  }
  
  export function getProducts(category){
    const products = initialState.productsList;
    const response = products.filter(product => product.category === category);
    return response;
  }