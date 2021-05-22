import React from 'react';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import _ from 'underscore';
import "./Item.css";
import AddToCartButton from './AddToCartButton/AddToCartButton';


const Item = ({data, getOrderFromItem, orderList}) => {
    const [qty, setQty] = React.useState(0);

    const handleIncrease = () => {
        setQty(qty+1);
    }
   
    const handleDecrease = () => {
        if(qty > 0) {
            setQty(qty-1);
        }
    }

    const handleOrder = () => {
        const {name, price, discount} = data;
        let newOrderData = {
            name,
            price,
            qty,
            discount,
            discountedPrice() {
                return price - price*discount;
            },
            subTotal() {
                if(discount > 0) {
                    return this.discountedPrice()*this.qty;
                } else {
                    return price*this.qty;
                }
                
            },
        }
        getOrderFromItem(newOrderData);
    }

    React.useEffect(() => {
       const findItemFromOrderList = _.findWhere(orderList, {name: data.name});
       if(!findItemFromOrderList) {
           setQty(0);
       }
    }, [orderList])

    return (
        <div className="container">
            {!data.isAvailable ? <span className="floating-text-not-available">Not Available</span> : null}
            <Paper className={data.isAvailable ? "item-wrapper" : "item-wrapper-not-available"} elevation={3}>
                <div className="item-display-wrapper">
                    <img className="item-display-image" src={process.env.PUBLIC_URL+"/assets/images/"+data.image+".webp"} alt="coffee-test"/>
                    {data.discount > 0 ? <div className="item-display-discount">{"-" + data.discount*100+"%"}</div> : null}
                </div>
                <div className="details" style={{display: "flex", alignItems: "center"}}>
                    <div className="item-name">
                        {data.name}
                    </div>
                    <div className="item-details-wrapper">
                        {data.discount && data.discount > 0 ? 
                        <div className="item-details-amount-discounted"> 
                            <div className="item-details-amount-n-dsc">
                                {"$"+data.price.toFixed(2)}
                            </div>
                            <div className="item-details-amount-dsc">
                                {"$"+(data.price-(data.price*data.discount)).toFixed(2)}
                            </div>
                        </div> : 
                        <div className="item-details-amount">{"$"+data.price.toFixed(2)}</div>}
                    </div>
                </div>
                <div className="item-details-addToCart">
                    <div style={{flex: '1'}}>
                        <IconButton className="test" size="small" onClick={handleDecrease}>
                            <RemoveIcon fontSize="small" />
                        </IconButton>
                        <span className="grp-btn-text">{qty}</span>
                        <IconButton className="test" size="small" onClick={handleIncrease}>
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </div>
                    <AddToCartButton className="add-to-cart" variant="contained" disabled={qty > 0 ? false : true} onClick={handleOrder}>
                        Add to cart
                    </AddToCartButton>
                </div>
            </Paper>
        </div>
    );
}

export default Item;