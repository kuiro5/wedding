import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';
import './styles.css';

class Modal extends Component {

  render() {
    const { children, isOpen, title, close } = this.props;

    const customStyles = {
      content: {
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.10)',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '50%',
        maxHeight: '90vh',
        overflowY: 'auto',
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
