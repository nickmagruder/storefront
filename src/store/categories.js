/* import * as actionTypes from './actions';
import axios from 'axios'; */

let initialState = {
  activeCategoryID: '',
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


export default function categoriesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'INITIAL_CATEGORY_LOAD':
      return initialState;
      
    case 'CATEGORY_ACTIVE':
      return {
        ...state, activeCategoryID: payload.activeCategoryID
      };
    default:
      return state;
  };
}

export function INITIAL_CATEGORY_LOAD() {
  return {
    type: 'INITIAL_CATEGORY_LOAD'
  };
}

export function CATEGORY_ACTIVE(activeCategoryID) {
  return {
    type: 'CATEGORY_ACTIVE', 
    payload: {
      activeCategoryID,
    }
  };
}