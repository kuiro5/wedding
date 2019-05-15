import React, { Component } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import './styles.css';

class RSVP extends Component {
  render() {
    const { close, isOpen } = this.props;

    return(
      <Modal
        isOpen={isOpen}
        close={close}
        title={'RSVP'}
      >
        <form className='rsvp-form' action='https://formspree.io/joshkuiros@gmail.com' method='POST'>
          <div className='rsvp-label-input'>
            <div>Email*</div>
            <input id='email' name='email' placeholder='Enter email address' required/>
          </div>
          <div className='rsvp-label-input'>
            <div>Name*</div>
            <input id='name' name='name' placeholder='Your name' required/>
          </div>
          <div className='rsvp-label-select'>
            <div>Are you coming?*</div>
            <select name='coming' required>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='rsvp-label-input'>
            <div>Are you bringing anyone with you?</div>
            <input id='guests' name='guests' placeholder='Names of your guests'/>
          </div>
          <div className='rsvp-label-input'>
            <div>Any special messages for us?</div>
            <textarea rows='2' name='messages'/>
          </div>
          <div className='rsvp-modal-footer'>
            <Button>Submit</Button>
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
