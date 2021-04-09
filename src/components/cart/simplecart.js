import React from 'react';
import {connect} from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { removeFromCart } from '../../store/cart.js';


const SimpleCart = (props) => {

  if(props.cart.cart.length !== null){
    return(
      <>
        <Card t={20} >
            <CardContent>
              {props.cart.cart.map((product, idx) => {
                return (
                  <Typography key={idx}>
                    ${product.price}: {product.name}
                    <Button onClick={() => props.removeFromCart(product)}>x</Button>
                  </Typography>
                )
              })}
            </CardContent>

        </Card>
      </>
    )
  } else {
    return(
      <>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = {
  removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);