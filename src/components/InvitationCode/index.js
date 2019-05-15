import React, { Component } from 'react';
import Modal from '../Modal';
import Button from '../Button';
import './styles.css';

class InvitationCode extends Component {

  render() {
    const { close, isOpen, submit, invitationCode, onInvitationCodeChange } = this.props;

    return(
      <Modal
        isOpen={isOpen}
        close={close}
        title={'Welcome!'}
      >
        <div className='invitation-code-wrapper'>
        <input className='invitation-code-input' placeholder={'Invitation Code'} onChange={onInvitationCodeChange} value={invitationCode} />
        <Button className='invitation-code-button' onClick={submit}>Submit</Button>
      </div>
      </Modal>

    );
  }
}

export default InvitationCode;
