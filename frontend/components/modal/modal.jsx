import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, component, closeModal } = this.props;

    if (isOpen) {
      return (
        <div className='modal-body' onClick={ () => closeModal() }>
          <div className='modal-content'>
            { component }
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
