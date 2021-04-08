/* import * as actionTypes from './actions'; */


let initialState = {
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
}


 function ProductsReducer(state = initialState, action) {
  let { type, payload } = action;
      return state;
  };




export default ProductsReducer;
