import React, { Component } from 'react';
import Modal from '../Modal';
import Button from '../Button';
import InvitationCodes from '../../constants/invitationCodes';
import './styles.css';

class InvitationCode extends Component {
  constructor() {
    super();
    this.state = {
      showError: false,
    };
  }

  invalidInvitationCode = () => {
    const { invitationCode } = this.props;

    return !Object.values(InvitationCodes).includes(invitationCode.toLowerCase());
  };

  onSubmit = () => {
    const { submit } = this.props;

    if(this.invalidInvitationCode()) {
      this.setState({ showError: true });
      return;
    }

    submit();
  };

  onChange = (e) => {
    const { onInvitationCodeChange } = this.props;
    const { showError } = this.state;

    if(showError) {
      this.setState({ showError: false });
    }

    onInvitationCodeChange(e);
  }; onKeyPress = (target) => {
    if(target.charCode === 13) {
      this.onSubmit();
    }
  }

  render() {
    const { submit, invitationCode, onInvitationCodeChange } = this.props;
    const { showError } = this.state;
    const error = showError ? 'Invalid Invitation Code' : '';

    return(
        <div className='invitation-code-wrapper'>
          <div>To begin, please enter the code provided on the RSVP card in your invitation:</div>
          <input
            className='invitation-code-input'
            placeholder={'Enter invitation code'}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            value={invitationCode}
          />
          <div className='invitation-code-error'>{error}</div>
          <Button disabled={!invitationCode.length} className='invitation-code-button' onClick={this.onSubmit}>Submit</Button>
        </div>
    );
  }
}

export default InvitationCode;
