import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/products/DefaultPage';

describe('products/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      products: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(renderedComponent.find('.products-default-page')).to.exist;
  });
  it('renders a list of products',()=>{
    const props = {
      products: {
        allProducts:[{name:1},{name:2}]
      },
      actions: {},
    };
    const renderedComponent = shallow( <DefaultPage {...props} />);
    expect(renderedComponent.find('.products-list').children().length).to.equal(2)
  })
  it('renders empty state',()=>{
    const props = {
      products: {},
      actions: {},
    };
    const renderedComponent = shallow(<DefaultPage {...props} />);
    expect(renderedComponent.text()).to.equal('...')
    expect()
  })
});
