import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';

class Modal extends Component {

  render() {
    const { children, isOpen, title, close } = this.props;

    const customStyles = {
      content: {
        padding: '2rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '40%'
      }
    };

    return(
      <ReactModal
        isOpen={isOpen}
        onRequestClose={close}
        style={customStyles}
      >
        <MdClose className='close' onClick={close} />
        <h1>{title}</h1>
        {children}
      </ReactModal>
    );
  }

}

export default Modal;
