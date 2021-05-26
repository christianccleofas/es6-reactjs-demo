import React from 'react';
import Item from '../../common/Item/Item';
import { api } from '../../../services/api';

// const Menu = ({ getOrderFromMenu, orderList }) => {
// 	const menu = api.productsApi.response;

// 	const getOrderFromItem = (orderItem) => {
// 		getOrderFromMenu(orderItem);
// 	}

// 	return (
// 		<div>
// 			{menu.map((data, index) => <Item data={data} key={index} orderList={orderList} getOrderFromItem={getOrderFromItem} />)}
// 		</div>
// 	);
// }

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.getOrderFromMenu = props.getOrderFromMenu;
		this.orderList = props.orderList;
		// this.state = {
		// 	someState: 'some value',
		// }
		// this.somefunction = this.somefunction.bind(this);
	}

	render() {
		const menu = api.productsApi.response;
		return (
			<div>
				{menu.map((data, index) => <Item data={data} key={index} orderList={this.orderList} getOrderFromItem={this.getOrderFromMenu} />)}
			</div>
		);
	}
}




export default Menu;

