import React from 'react';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./CartDrawer.css";
import _ from 'underscore';

const CartDrawer = ({isCartDrawerOpen, closeCartDrawer, orderList, removeItemFromCart}) => {
    
    const computeGrandTotal = () => {
        let total = 0;
        orderList.map(item => {
            total += item.subTotal();
            return null;
        });
        return total.toFixed(2);
    }

   const RenderList = (data, index) => {
       const handleRemove = () => {
            removeItemFromCart(data);
       }
        return (
            <>
               <div className="drawer-body-list-item" key={index}>
                    <div className="drawer-body-list-item-qty">
                        <Paper className="drawer-body-list-item-qty-paper" elevation={0}>{data.qty}</Paper>
                    </div>
                    <div className="drawer-body-list-item-details">
                        <div className="drawer-body-list-item-details-itemName">
                            {data.name}
                        </div>
                        <div className="drawer-body-list-item-details-subTotal">
                            {data.subTotal().toFixed(2)}
                        </div>
                        <div className="drawer-body-list-item-details-action-remove">
                            <IconButton color="inherit" aria-label="close" onClick={handleRemove}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </>
        );
   }

    return (
        <Drawer anchor={'right'} open={isCartDrawerOpen} classes={{root: {width: "20%"}}}>
            <div>
            <div className="drawer-header">
                <div className="drawer-header-title">
                    Cart
                    <div className="drawer-header-subtitle">items in this list includes vat</div>
                </div>
                <div className="drawer-header-action-close">
                    <IconButton onClick={closeCartDrawer} color="inherit" aria-label="close">
                        <ArrowForwardIcon />
                    </IconButton>
                </div>
            </div>
            <div className="drawer-body">
                {orderList.map((data, index) => RenderList(data, index))}
            </div>
            </div>
            <div className="drawer-footer">
                <div className="drawer-footer-title">
                    Total:
                </div>
                <div className="drawer-footer-total">
                    {`$${computeGrandTotal()}`}
                </div>
            </div>
        </Drawer>
    )
}

export default CartDrawer;