import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class StoreLogo extends Component {
  constructor(){
    super()
    this.state = {foo:0}
  }
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  doStuff(){
    this.setState({...this.state,foo:this.state.foo+1})
  }

  render() {
    return (
      <div className="home-StoreLogo" >
      <button onClick={this.doStuff.bind(this)}>Click Me</button>
        {this.state.foo}
       
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
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
)(StoreLogo);
