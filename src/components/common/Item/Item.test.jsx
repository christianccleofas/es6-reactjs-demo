import React from 'react';
import {shallow} from 'enzyme';
import Item from './Item';

const mocks = {
  // PROPS
  data: {
    id: 0,
    name: "Test item",
    isAvailable: true,
    price: 3.66,
    image: "8e0b1749cfad49f085e3efff636aef58",
    discount: 0
  },
  getOrderFromItem: jest.fn(),
  orderList: [],
  // STATES
  qty: 0,
  useState: jest.fn(),
  setQty: jest.fn(),
  // API
  // OTHERS
}
jest.mock('underscore', () => ({
  findWhere: jest.fn(),
}))

const mockUseState = () => jest.spyOn(React, 'useState').mockImplementation(init => [init, mocks.setQty]);

describe('<Item />: Component Testing.', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('<Item />: Conditional render testing.', () => {
    it('Should match snapshot.', () => {
      const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('Should render with different elemets/styles if data.isAvailable is false.', () => {
      const data = {
        id: 0,
        name: "Test item",
        isAvailable: false,
        price: 3.66,
        image: "8e0b1749cfad49f085e3efff636aef58",
        discount: 0
      }
      const wrapper = shallow(<Item data={data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      expect(wrapper.find('[data-testid="span-not-available"]').exists()).toBeTruthy();
      expect(wrapper.find('[data-testid="paper"]').props().className).toEqual('item-wrapper-not-available');
    });
    it('Should render with different elemets/styles if data.isAvailable is true.', () => {
      const data = {
        id: 0,
        name: "Test item",
        isAvailable: true,
        price: 3.66,
        image: "8e0b1749cfad49f085e3efff636aef58",
        discount: 0
      }
      const wrapper = shallow(<Item data={data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      expect(wrapper.find('[data-testid="span-not-available"]').exists()).toBeFalsy();
      expect(wrapper.find('[data-testid="paper"]').props().className).toEqual('item-wrapper');
    });
    it('Should render with different elemets/styles if data.discount is not greater than 0.', () => {
      const data = {
        id: 0,
        name: "Test item",
        isAvailable: false,
        price: 3.66,
        image: "8e0b1749cfad49f085e3efff636aef58",
        discount: 0
      }
      const wrapper = shallow(<Item data={data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      expect(wrapper.find('[data-testid="div-display-discount"]').exists()).toBeFalsy();
      expect(wrapper.find('[data-testid="div-amount"]').exists()).toBeTruthy();
      expect(wrapper.find('[data-testid="div-amount-discount"]').exists()).toBeFalsy();
    });
    it('Should render with different elemets/styles if data.discount is greater than 0.', () => {
      const data = {
        id: 0,
        name: "Test item",
        isAvailable: false,
        price: 3.66,
        image: "8e0b1749cfad49f085e3efff636aef58",
        discount: 5
      }
      const wrapper = shallow(<Item data={data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      expect(wrapper.find('[data-testid="div-display-discount"]').exists()).toBeTruthy();
      expect(wrapper.find('[data-testid="div-amount"]').exists()).toBeFalsy();
      expect(wrapper.find('[data-testid="div-amount-discount"]').exists()).toBeTruthy();
    });
  });

  describe('<Item />: Event handler testing without mocked states.', () => {
    test('onClick: button-add should trigger handleIncrease.', () => {
      const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      expect(wrapper.find('[date-testid="span-qty"]').text()).toEqual('0');
      wrapper.find('[data-testid="button-add"]').simulate('click'); // +1
      expect(wrapper.find('[date-testid="span-qty"]').text()).toEqual('1');
    });
    test('onClick: button-subtract should trigger handleDecrease.', () => {
      const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      expect(wrapper.find('[date-testid="span-qty"]').text()).toEqual('0');
      wrapper.find('[data-testid="button-add"]').simulate('click'); // +1
      wrapper.find('[data-testid="button-subtract"]').simulate('click'); // -1
      expect(wrapper.find('[date-testid="span-qty"]').text()).toEqual('0');
    });
    test('onClick: button-add-to-cart should trigger handleOrder.', () => {
      const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      wrapper.find('[data-testid="button-add"]').simulate('click'); // +1
      wrapper.find('[data-testid="button-add-to-cart"]').simulate('click');
      expect(mocks.getOrderFromItem).toHaveBeenCalledWith({
        name: mocks.data.name,
        price: mocks.data.price,
        qty: 1,
        discount: mocks.data.discount,
        discountedPrice: expect.any(Function),
        subTotal: expect.any(Function)
      });
      const orderData = mocks.getOrderFromItem.mock.calls[0][0];
      expect(orderData.discountedPrice()).toEqual(mocks.data.price - mocks.data.price * mocks.data.discount);
      expect(orderData.subTotal()).toEqual(mocks.data.price * 1);
    });
  });

  describe('<Item />: Event handler testing with mocked states.', () => {
    beforeEach(() => {
      mockUseState();
    });

    test('onClick: button-add should trigger handleIncrease.', () => {
      const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      wrapper.find('[data-testid="button-add"]').simulate('click'); // +1
      expect(mocks.setQty).toHaveBeenCalledTimes(1);
      wrapper.find('[data-testid="button-add"]').simulate('click'); // +1
      expect(mocks.setQty).toHaveBeenCalledTimes(2);
    });
    describe('onClick: handleDecrease.', () => {
      it('Should decrease qty if qty is greater than 0.', () => {
        const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
        wrapper.find('[data-testid="button-add"]').simulate('click'); // +1
        wrapper.find('[data-testid="button-subtract"]').simulate('click'); // -1
        expect(mocks.setQty).toHaveBeenCalledWith(1);
      });
      it('Should not decrease qty if qty is not greater than 0.', () => {
        const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
        wrapper.find('[data-testid="button-subtract"]').simulate('click'); // 0
        expect(mocks.setQty).toHaveBeenCalledTimes(0);
      });
    });
  });
});
