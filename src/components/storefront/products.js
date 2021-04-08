import React from 'react';

import { connect } from 'react-redux';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
/* import Paper from '@material-ui/core/Paper'; */
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import theme from '../../uitheme';

/* const generalStyles = makeStyles({
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
}) */


/* function displayProducts() {
  {props.products.productList.map((product, index) => {
    if (product.category === props.activeCategory) {
      return (
        <Grid item key={index}>
          <Card>
            <CardHeader title={product.name} />
            <CardContent>
              <Typography component="p">$ {product.price}</Typography>
            </CardContent>
            <CardActions>
              <IconButton>Add to cart</IconButton>
              <IconButton>View details</IconButton>
            </CardActions>
          </Card>
        </Grid>
      )
    } else {
      return null;
    }
  } */



function Products() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxwidth="xs">
        {/*             <displayProducts /> */}
        <h1>Products</h1>
      </Container>
    </ThemeProvider>
  );
}

/*     const mapStateToProps = state => {
      return { products: state.products, activeCategory: state.categories.activeCategory }
    }
    
    const mapDispatchToProps = {
      inactive,
      active,
      getProducts,
    } */

/*   export default connect(mapStateToProps, mapDispatchToProps)(productViewer); */

export default Products;