import * as actionTypes from './actions';

let initialCategories = [
  { name: 'bicycles',
    displayName: 'Bicycles',
    description: '2 wheels, rubber side down',
    active: false
  }, 
  { name: 'pets',
  displayName: 'Pets',
  description: 'Usually furry, sometimes cuddly',
  active: false
}, 
]


const initialState = {
  categories: initialCategories,
};


function CategoriesReducer(state = initialState, action) {
  let { type, payload } = action;
}


export default CategoriesReducer;
