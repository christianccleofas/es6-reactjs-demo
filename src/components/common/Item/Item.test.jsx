import React from 'react';
import {shallow} from 'enzyme';
import Item from './Item';

const mocks = {
  data: {
    id: 0,
    name: "Test item",
    isAvailable: true,
    price: 3.66,
    image: "8e0b1749cfad49f085e3efff636aef58",
    discount: 0
  },
  getOrderFromItem: jest.fn(),
  orderList: []
}

describe('<Item />: Render Testing', () => {
  it('Should match snapshot.', () => {
    const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />)
    expect(wrapper).toMatchSnapshot();
  });
});