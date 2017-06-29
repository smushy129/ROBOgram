import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.clearAndCloseModal = this.clearAndCloseModal.bind(this);
  }

  clearAndCloseModal() {
    this.props.clearPhotoDetailState();
    this.props.closeModal();
  }


  render() {
    const { isOpen, component } = this.props;

    if (isOpen) {
      return (
        <div className='modal-body' onClick={ this.clearAndCloseModal }>

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
