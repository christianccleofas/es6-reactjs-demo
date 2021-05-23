import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const AddToCartButton = withStyles({
  root: {
    background: '#006241',
    border: 0,
    color: 'white',
    fontSize: 'small',
    fontWeight: "400",
    padding: "5px 25px",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    flex: 1,
    '&:hover': {
      background: '#006241',
      border: 0,
      color: 'white',
      fontSize: 'small',
      fontWeight: "400",
      padding: "5px 25px",
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  },
  label: {
    textTransform: 'none',
  },
})(Button);

export default AddToCartButton;