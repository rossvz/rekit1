import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    if(!this.props.products || !this.props.products.allProducts) return <div>...</div>
    return (
      <div className="products-default-page">
        <ul className="products-list">
          {this.props.products.allProducts.map(p => <li>{p.name}</li>)}
        </ul>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
