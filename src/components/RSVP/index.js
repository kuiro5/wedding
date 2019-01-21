import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from '../Button';
import './styles.css';

class RSVP extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { isOpen } = this.props;

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return(
      <Modal
        isOpen={isOpen}
        onRequestClose={this.cancel}
        style={customStyles}
      >
        <div className='close' onClick={this.cancel} />
        <h1>RSVP</h1>
        <form class='rsvp-form' action='https://formspree.io/joshkuiros@gmail.com' method='POST'>
          <div class='rsvp-label-input'>
            <div>Email*</div>
            <input id='email' name='email' required/>
          </div>
          <div class='rsvp-label-input'>
            <div>Name*</div>
            <input id='name' name='name' required/>
            <input id='name' name='name' required/>
          </div>
          <div class='rsvp-label-input'>
            <div>Are you coming?*</div>
            <input id='coming' name='coming' required/>
          </div>
          <div class='rsvp-label-input'>
            <div>Are you bringing anyone with you?</div>
            <input id='guests' name='guests'/>
          </div>
          <div class='rsvp-label-input'>
            <div>Got any special messages for us?</div>
            <input type='text' id='messages' name='messages'/>
          </div>
          <div class='rsvp-footer'>
            <Button onClick={this.cancel}>Cancel</Button>
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
