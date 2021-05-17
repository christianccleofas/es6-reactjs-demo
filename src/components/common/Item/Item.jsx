import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {api} from '../../../services/api';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Item.css";
import {convertToCurrency} from '../../../utils/currencyConverter.utils';

export default function Item() {
    const menu = api.products.response;
    return menu.map(function(data, index) {
        return (
            <div className="container">
                {!data.isAvailable ? <span className="floating-text-not-available">Not Available</span> : null}
                <Paper className={data.isAvailable ? "item-wrapper" : "item-wrapper-not-available"}>
                    <div className="item-display-wrapper">
                        <img className="item-display-image" src={`${process.env.PUBLIC_URL}/assets/images/${data.image}.webp`} alt="coffee-test"/>
                        {data.discount > 0 ? <div className="item-display-discount">{`${data.discount*100}% Off`}</div> : null}
                    </div>
                    <div className="item-name">
                        {data.name}
                    </div>
                    <div className="item-details-wrapper">
                        {data.discount && data.discount > 0 ? 
                            <div className="item-details-amount-discounted"> 
                                <div className="item-details-amount-n-dsc">{`$${data.amount.value.toFixed(2)}`}</div>
                                <div className="item-details-amount-dsc">{`$${(data.amount.value-data.amount.value*data.discount).toFixed(2)}`}</div>
                            </div> : 
                            <div className="item-details-amount">{`$${convertToCurrency(data.amount.currency, data.amount.value)}`}</div>}
                        <div className="item-details-addToCart"> 
                            <Button className='item-button' variant="contained" color="primary" startIcon={<ShoppingCartIcon />}>
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    });
}