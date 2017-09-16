import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  }
}

const Errors = (props) => {
  return (
    <p id="upload-errors">{props.errors[0]}</p>
  )
}

export default connect(
  mapStateToProps,
  null
)(Errors);
