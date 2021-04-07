import * as actionTypes from './actions';

let initialState = {
  activeCategory: '',
  activeDesctription: '',
  categoryList: [
    {
      _id: 213434598,
      name: 'bicycles',
      displayName: 'Bicycles',
      description: '2 wheels, rubber side down',
    },
    {
      _id: 90563425,
      name: 'pets',
      displayName: 'Pets',
      description: 'Usually furry, sometimes cuddly',
    },
  ]
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_LOAD:
      return initialState;

    case actionTypes.SELECT_CATEGORY:
      return {
        ...state, activeCategory: payload.category, activeDesctription: payload.description
      };
    default:
      return state;
  }
};


function CategoriesReducer(state = initialState, action) {
  let { type, payload } = action;
}


export default CategoriesReducer;
