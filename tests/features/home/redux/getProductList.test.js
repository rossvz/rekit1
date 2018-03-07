import { expect } from 'chai';

import {
  HOME_GET_PRODUCT_LIST,
} from 'src/features/home/redux/constants';

import {
  getProductList,
  reducer,
} from 'src/features/home/redux/getProductList';

describe('home/redux/getProductList', () => {
  it('returns correct action by getProductList', () => {
    expect(getProductList()).to.have.property('type', HOME_GET_PRODUCT_LIST);
  });

  it('handles action type HOME_GET_PRODUCT_LIST correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_GET_PRODUCT_LIST }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
