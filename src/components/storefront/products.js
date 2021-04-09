import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Categories from './categories';
import SimpleCart from '../cart/simplecart';

/* import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'; */
import Typography from '@material-ui/core/Typography';
/* import Container from '@material-ui/core/Container'; */
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

import { getProducts } from '../../store/products.js';
import { productsLoader } from '../../store/products';
import { addToCart } from '../../store/cart';



const generalStyles = makeStyles({
  root: {
    background: 'linear-gradient(0deg, #000, #FFF)',
    fontSize: 30,
    border: 0,
    marginTop: 80,
    marginBottom: 15,
    borderRadius: 15,
    color: 'black',
    padding: '20px 30px'
  }
})

function H2Styled() {
  const classes = generalStyles();
  return <Typography className={classes.root}>Products</Typography>
}



const Products = props => {

  useEffect(() => {
    props.productsLoader();
  }, []);

  return (
    <>
      {console.log(props.products, 'props.products')}
      {console.log(props.activeCategory, 'props.activeCategory')}
      {console.log(props.activeDescription, 'props.activeDescription')}

      <Categories />
      <SimpleCart />
      <Paper>

        <H2Styled />

        <Grid container justify="center" spacing={5}>
          
          {props.products.productsList.map((product, idx) => {
            if (product.category === props.activeCategory.toLowerCase()) {
              return (
                <Grid item key={idx}>

                  <Card>
                    <CardHeader title={product.name} />
                    <CardContent>
                      <Typography component="p">Item Description</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography component="p">{product.inStock} in stock</Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton onClick={() => props.addToCart(product)}>Add One to Cart</IconButton>
                      <IconButton>View Item Details</IconButton>
                    </CardActions>
                  </Card>

                </Grid>
              )

            } else {
              return null;
            }
          })}
        </Grid>
      </Paper>
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