import axios from 'axios';

const firebaseInstance = axios.create({
  baseURL: 'https://storefront-4a98e-default-rtdb.firebaseio.com/'
});

export default firebaseInstance;
