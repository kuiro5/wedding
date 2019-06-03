import React, { Component } from 'react';
import ReactModal from 'react-aria-modal';
import { MdClose } from 'react-icons/md';
import './styles.css';

class Modal extends Component {

  getApplicationNode = () => {
    return document.getElementById('___gatsby');
  }
  render() {
    const { children, isOpen, title, close } = this.props;

    if(!isOpen) {
      return null;
    }

    const modalStyles = {
      padding: '3rem',
      borderRadius: '8px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.10)',
      minWidth: '50%',
      maxHeight: '90vh',
      overflowY: 'auto',
      backgroundColor: 'white',
      position: 'relative',
    };

    const underlayStyles = {
      background: 'rgba(255, 255, 255, .6)',
    };

    return(
      <ReactModal
        titleText={title}
        onExit={close}
        getApplicationNode={this.getApplicationNode}
        dialogStyle={modalStyles}
        underlayStyle={underlayStyles}
        verticallyCenter
      >
        <h1>{title}</h1>
        <MdClose className='close' onClick={close} />
        {children}
      </ReactModal>
    );
  }

}

export default Modal;
