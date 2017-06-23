import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { isOpen, component } = this.props;

    if (isOpen) {
      return (
        <div>{ component }</div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
