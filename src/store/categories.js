/* import * as actionTypes from './actions';
import axios from 'axios'; */

let initialState = {
//activeCategoryID: '', 
  activeCategory: '',
  activeDescription: '',
  categoryList: [
    {
      _id: 213434598,
      name: 'electronics',
      displayName: 'Electronics',
      description: 'Electrical',
    },
    {
      _id: 90563425,
      name: 'food',
      displayName: 'Food',
      description: 'Edible',
    },
  ]
}


export default function categoriesReducer(state = initialState, action){
  const {type, payload} = action;

  switch (type) {
    case "INITIAL_CATEGORY_LOAD":
      return initialState;

    case "CATEGORY_ACTIVE":
      return {...state, activeCategory: payload.activeCategory, activeDescription: payload.activeDescription};
    default:
      return state;
  }
}


export function INITIAL_CATEGORY_LOAD() {
  return {
    type: 'INITIAL_CATEGORY_LOAD'
  };
}


export function CATEGORY_ACTIVE(activeCategory, activeDescription) {
  return {
    type: 'CATEGORY_ACTIVE', 
    payload: {
      activeCategory,
      activeDescription
    }
  }
}