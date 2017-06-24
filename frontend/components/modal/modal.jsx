import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, component } = this.props;

    if (isOpen) {
      return (
        <div className='modal-body'>
          <div className='modal-content'>
            <div>
              { component }
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
