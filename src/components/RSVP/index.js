import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from '../Button';
import { MdClose } from 'react-icons/md';
import './styles.css';

class RSVP extends Component {
  render() {
    const { isOpen } = this.props;

    const customStyles = {
      content: {
        padding: '2rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };

    return(
      <Modal
        isOpen={isOpen}
        onRequestClose={this.cancel}
        style={customStyles}
      >
        <MdClose className='close' onClick={this.cancel} />
        <h1>RSVP</h1>
        <form className='rsvp-form' action='https://formspree.io/joshkuiros@gmail.com' method='POST'>
          <div className='rsvp-label-input'>
            <div>Email*</div>
            <input id='email' name='email' required/>
          </div>
          <div className='rsvp-label-input'>
            <div>Name*</div>
            <input id='name' name='name' required/>
          </div>
          <div className='rsvp-label-input'>
            <div>Are you coming?*</div>
            <select name='coming' required>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='rsvp-label-input'>
            <div>Are you bringing anyone with you?</div>
            <input id='guests' name='guests'/>
          </div>
          <div className='rsvp-label-input'>
            <div>Got any special messages for us?</div>
            <input type='text' id='messages' name='messages'/>
          </div>
          <div className='rsvp-modal-footer'>
            <Button>Save</Button>
          </div>
        </form>
      </Modal>

    );
  }

  cancel = (e) => {
    const { close } = this.props;

    e.stopPropagation();
    e.preventDefault();

    close();
  }

}

export default RSVP;
