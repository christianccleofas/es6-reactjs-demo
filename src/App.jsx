import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./App.css";
import _ from 'underscore';
import CartBadge from './CartBadge/CartBadge';
import CartDrawer from './CartDrawer/CartDrawer';
import Menu from './components/container/Menu/Menu';
import SnackbarFeedback from './SnackbarFeedback/SnackbarFeedback';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [orderList, setOrderList] = React.useState([]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = React.useState(false);
  const [isSnackbarFeedbackOpen, setIsSnackbarFeedbackOpen] = React.useState(false);

  const openCartDrawer = () => setIsCartDrawerOpen(true); //opens cart drawer
  const closeCartDrawer = () => setIsCartDrawerOpen(false); //closes cart drawer

  const getOrderFromMenu = orderItem => {
    /* Adds item to the list of orders on the cart drawer when Add to Cart button is clicked */
    if(!orderList.length) {
      /* no orders yet */
      setOrderList([...orderList, orderItem]);
    } else {
      /* orders */
      let isItemExisting = _.findWhere(orderList, {name: orderItem.name});
      let itemIndex = _.indexOf(orderList, isItemExisting);
      let orders = orderList;
      /* no duplicate orders should be displayed */
      if(itemIndex >= 0) {
        orders[itemIndex]['qty'] = orderItem.qty;
        setOrderList(orders);
      } else {
        setOrderList([...orderList, orderItem]);
      }
    }
    setIsSnackbarFeedbackOpen(true);
  }

  const removeItemFromCart = data => {
    /* Removes item from the list of orders to the cart drawer when removed button is clicked */
    const listOfItemsAfterRemoval = _.without(orderList, data);
    setOrderList(listOfItemsAfterRemoval);
  }

  const customProps = {
    orderList,
    openCartDrawer,
    closeCartDrawer,
    isCartDrawerOpen,
    getOrderFromMenu,
    removeItemFromCart
  }

  const handleClose = (event, reason) => {
    /* Close snackbar component */
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarFeedbackOpen(false);
  };


  const customSnackbarProps = {
    /* Snackbar props */
    handleClose,
    openCartDrawer,
    isSnackbarFeedbackOpen,
  }

  return (
    <div className={classes.root} id="root">
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              ES6 | React JS Demo
          </Typography>
          <CartBadge {...customProps} />
        </Toolbar>
      </AppBar>
      <CartDrawer {...customProps} />
      <div className="body-wrapper">
        <Menu {...customProps} />
      </div>
      <SnackbarFeedback {...customSnackbarProps} />
    </div>
  )
}