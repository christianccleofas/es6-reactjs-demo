import React from 'react';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import "./Item.css";
import AddToCartButton from './AddToCartButton/AddToCartButton';
import _  from 'underscore';


const Item = params => {
	let data = params.data;
	let getOrderFromItem = params.getOrderFromItem;
	let orderList = params.orderList;

	const [qty, setQty] = React.useState(0);

	function handleIncrease() {
		setQty(qty + 1);
	}

	function handleDecrease() {
		if (qty > 0) {
			setQty(qty - 1);
		}
	}

	function handleOrder() {
		let name = data.name;
		let price = data.price;
		let discount = data.discount;
        let newOrderData = {
            name: name,
            price: price,
            qty: qty,
            discount: discount,
            discountedPrice() {
                return price - price * discount;
            },
            subTotal() {
                if (discount > 0) {
                    return this.discountedPrice() * this.qty;
                } else {
                    return price * this.qty;
                }
            },
        }
		getOrderFromItem(newOrderData);
	}


	React.useEffect(() => {
		//This useEffect function checks if the order is in the cart. if the user removes the order form the cart, it will reset the quantity back to 0.
		const isExisting = _.findWhere(orderList, {name: data.name});
		if(!isExisting) {
			setQty(0);
		}
	}, [orderList])

	return (
		<div className="container">
			{!data.isAvailable ? <span data-testid="span-not-available" className="floating-text-not-available">Not Available</span> : null}
			<Paper data-testid="paper" className={data.isAvailable ? "item-wrapper" : "item-wrapper-not-available"} elevation={3}>
				<div className="item-display-wrapper">
					{/* image */}
					{/* <img className="item-display-image" src={process.env.PUBLIC_URL + "/assets/images/" + data.image + ".webp"} alt="coffee-test" /> */}
					<img className="item-display-image" src={`${process.env.PUBLIC_URL}/assets/images/${data.image}.webp`} alt="coffee-test" />
					{data.discount > 0 ? <div data-testid="div-display-discount" className="item-display-discount">{`-${data.discount*100}%`}</div> : null}
				</div>
				<div className="details" style={{ display: "flex", alignItems: "center" }}>
					{/* product name */}
					<div className="item-name">
						{data.name}
					</div>
					{/* amount*/}
					<div className="item-details-wrapper">
						{data.discount && data.discount > 0 ?
							<div data-testid="div-amount-discount" className="item-details-amount-discounted">
								<div className="item-details-amount-n-dsc">
									{"$" + data.price.toFixed(2)}
								</div>
								<div className="item-details-amount-dsc">
									{"$" + (data.price - (data.price * data.discount)).toFixed(2)}
								</div>
							</div> :
							<div data-testid="div-amount" className="item-details-amount">{"$" + data.price.toFixed(2)}</div>}
					</div>
				</div>
				<div className="item-details-addToCart">
					{/* +/- buttons, quantity */}
					<div style={{ flex: '1' }}>
						<IconButton data-testid="button-subtract" className="test" size="small" onClick={handleDecrease}>
							<RemoveIcon fontSize="small" />
						</IconButton>
						<span date-testid="span-qty" className="grp-btn-text">{qty}</span>
						<IconButton data-testid="button-add" className="test" size="small" onClick={handleIncrease}>
							<AddIcon fontSize="small" />
						</IconButton>
					</div>
					{/* add to cart button */}
					<AddToCartButton data-testid="button-add-to-cart" className="add-to-cart" variant="contained" disabled={qty > 0 ? false : true} onClick={handleOrder}>
						Add to cart
					</AddToCartButton>
				</div>
			</Paper>
		</div>
	);
}

export default Item;