import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Categories from './categories';

/* import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'; */

import { getProducts } from '../../store/products.js';
import { productsLoader } from '../../store/products';
import { addToCart } from '../../store/cart';




const Products = props => {

/*   useEffect(() => {
    props.productsLoader();
  }, []);
 */

  return (
    <>
<h1></h1>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activeCategory: state.categories.activeCategory,
    activeDescription: state.categories.activeDescription,
  }
}

const mapDispatchToProps = {
  getProducts,
  addToCart,
  productsLoader,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);