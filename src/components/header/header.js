import React from 'react';
import Button from '@material-ui/core/Button';
import { orange, green } from '@material-ui/core/colors';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import theme from '../../uitheme';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(0deg, #000, #AAA)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '20px 30px'
  }
})


function Header() {
  return (
    <ThemeProvider theme={theme}>
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h3">
                  Our Store
                </Typography>
                <Button>
                  Cart
                </Button>
              </Toolbar>
            </AppBar>
    </ThemeProvider>
  );
}

export default Header;
