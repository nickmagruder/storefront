
import { orange, green } from '@material-ui/core/colors';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';


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

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 80,
      marginBottom: 40,
    },
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
})


export default theme;
