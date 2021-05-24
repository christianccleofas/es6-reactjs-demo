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
  orderList: [],
  qty: 0,
  useState: jest.fn(),
}

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: x => [x, mocks.useState],
//   useEffect: f => f()
// }));
// const mockUseState = () => jest.spyOn(React, 'useState').mockReturnValueOnce([0, mocks.useState])

describe('<Item />: Component Testing', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('<Item />: Conditional render testing', () => {
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

  describe('<Item />: Event handler testing without mocked states', () => {
    test('onClick: button-add should trigger handleIncrease', () => {
      const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      expect(wrapper.find('[date-testid="span-qty"]').text()).toEqual('0');
      wrapper.find('[data-testid="button-add"]').simulate('click'); // +1
      expect(wrapper.find('[date-testid="span-qty"]').text()).toEqual('1');
    });
    test('onClick: button-subtract should trigger handleDecrease', () => {
      const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
      expect(wrapper.find('[date-testid="span-qty"]').text()).toEqual('0');
      wrapper.find('[data-testid="button-add"]').simulate('click'); // +1
      wrapper.find('[data-testid="button-subtract"]').simulate('click'); // -1
      expect(wrapper.find('[date-testid="span-qty"]').text()).toEqual('0');
    });
  });

  // describe('<Item />: Event handler testing', () => {
    // beforeEach(() => {
    //   jest.clearAllMocks()
    // })
    // test('onClick: button-add should trigger handleIncrease', () => {
    //   const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
    //   wrapper.find('[data-testid="button-add"]').simulate('click');
    //   expect(mocks.useState).toHaveBeenCalledWith(1);
    // });
    // test('onClick: button-subtract should trigger handleDecrease', () => {
    //   const wrapper = shallow(<Item data={mocks.data} getOrderFromItem={mocks.getOrderFromItem} orderList={mocks.orderList} />);
    //   wrapper.find('[data-testid="button-add"]').simulate('click');
    //   wrapper.find('[data-testid="button-subtract"]').simulate('click');
    //   console.log(mocks.useState.mock.calls)
    //   expect(mocks.useState.mock.calls[1].length).toBe(0);
    // });
  // });
});
