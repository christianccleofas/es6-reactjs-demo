import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartBadge = ({ openCartDrawer, orderList }) => {
	if (orderList && orderList.length) {
		return (
			<Badge badgeContent={orderList.length} color="secondary" onClick={openCartDrawer} style={{ cursor: "pointer" }}>
				<div style={{ marginRight: "7px", fontSize: "1em", fontWeight: "400" }}>View Cart</div>
				<ShoppingCartIcon fontSize="small" />
			</Badge>
		)
	} else {
		return (
			<span style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
				<span style={{ marginRight: "7px", fontSize: "1em", fontWeight: "400" }}>View Cart</span>
				<ShoppingCartIcon fontSize="small" onClick={openCartDrawer} style={{ cursor: "pointer", color: "#fff" }} />
			</span>
		)
	}

}

export default CartBadge;