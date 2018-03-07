import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { StoreLogo } from 'src/features/home/Logo';

describe('home/Logo', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <StoreLogo {...props} />
    );

    expect(renderedComponent.find('.home-StoreLogo').getElement()).to.exist;
    expect(renderedComponent.state('foo')).to.equal(0)
  });
  it('should do stuff',()=>{
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <StoreLogo {...props} />
    );
    renderedComponent.find('button').simulate('click')
    expect(renderedComponent.state('foo')).to.equal(1)

  })
});
