/* import { useEffect } from 'react'; */
import { connect } from 'react-redux';
import { makeStyles, /* ThemeProvider */ } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
/* import theme from '../../uitheme'; */

import { INITIAL_CATEGORY_LOAD, CATEGORY_ACTIVE } from '../../store/categories'  

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

const Categories = props => {

  return (
    <>

      <H1Styled />

      <ButtonGroup>
        {console.log(props)}
{/*         {props.categoryList.map(categories => {
          return (
            <Button>
              onClick={ props.onCategoryChange(props._id) }
            style={{
                fontSize: 24
              }}
            variant="contained"
            color="primary"
            size="large"
              {props.categoryList.DisplayName}
            </Button>
          )
        })} */}
      </ButtonGroup>

    </>
  )
}

const mapStateToProps = state => {
  return {
    productlist: state.productlist,
    categoryList: state.categoryList,
    activeCategory: state.activeCategory,
    activeDescription: state.activeDescription
  }
}

const mapDispatchToProps = {
  INITIAL_CATEGORY_LOAD,
  CATEGORY_ACTIVE,
};  

// Max version:
/* const mapDispatchToProps = dispatch => {
  return {
    onInitialLoad: () => dispatch ({type: 'INITIAL_CATEGORY_LOAD'}),
    onCategoryChange: () => dispatch ({type: 'CATEGORY_ACTIVE' })
  }
} */

export default connect(mapStateToProps, mapDispatchToProps)(Categories);