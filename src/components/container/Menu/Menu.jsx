import React from 'react';
import Item from '../../common/Item/Item';
import {api} from '../../../services/api';

const Menu = ({getOrderFromMenu, orderList}) => {
    const menu = api.productsApi.response;
    
    const getOrderFromItem = (orderItem) => {
        getOrderFromMenu(orderItem);
    }

    const itemProps = {
        orderList,
        getOrderFromMenu
    }

    return (
        <>
            <div>
                {menu.map((data, index) => <Item data={data} getOrderFromItem={getOrderFromItem} key={index} orderList={orderList} /> )}
            </div>
        </>
    );
}

export default Menu;