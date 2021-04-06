import React from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import theme from '../../uitheme';

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

function H1Styled() {
  const classes = generalStyles();
  return <Typography className={classes.root}>Browse Categories</Typography>
}



function StoreFront() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxwidth="xs">

        <H1Styled />

        <ButtonGroup>
          <Button
            onClick={() => alert('hello')}
            style={{
              fontSize: 24
            }}
            variant="contained"
            color="primary"
            size="large">
            Category 1
        </Button>
          <Button
            onClick={() => alert('hello')}
            style={{
              fontSize: 24
            }}
            variant="contained"
            color="secondary"
            size="large">
            Category 2
        </Button>
        </ButtonGroup>

        <Grid container spacing={1} justify="center">
          <Grid item xs={3} sm={6}>
            <Paper style={{ height: '200px', width: '30%', }} />
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{ height: '200px', width: '30%' }} />
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{ height: '200px', width: '30%' }} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default StoreFront;
