import React, { Component } from 'react';
import Modal from 'react-modal';
import './styles.css';

class RSVP extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { isOpen } = this.props;

    return(
      <Modal
        isOpen={isOpen}
      >
        <h1>RSVP</h1>
        <form class='rsvp-form' action='https://formspree.io/joshkuiros@gmail.com' method='POST'>
          <div class='rsvp-label-input'>
            <label for='name'>Name </label>
            <input id='name' name='name' placeholder='Enter your name' required/>
          </div>
          <div class='rsvp-label-input'>
            <label for='name'>Guests </label>
            <input id='guests' name='guests' type='number' min='1' value='1' required/>
          </div>
          <div class='rsvp-footer'>
            <button onClick={this.cancel}>Cancel</button>
            <button>Save</button>
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
