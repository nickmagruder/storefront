import * as actionTypes from './actions';

let initialState = [

  {
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
  },
]


 function ProductsReducer(state = initialState, action) {
  let { type, payload } = action;

/*   switch (type) {
    case "ADD_ONE_TO_VOTES":

      totalVotes = state.total + 1;
      candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        }
        return candidate
      });

      return { total: totalVotes, candidates: candidates }
    case "SUBRTACT_ONE_FROM_VOES":

      totalVotes = state.total - 1;
      candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes - 1 }
        }
        return candidate;
      });

      return { total: totalVotes, candidates: candidates }
    default:
      return state;
  } */
}

export default ProductsReducer;
