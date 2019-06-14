import React, { Component } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import { Flex, Box } from '@rebass/grid';
import InvitationCodes from '../../constants/invitationCodes';
import './styles.css';

const {
  CELEBRATE,
  WARHOL,
  PITTSBURGH,
  PRIMANTIS,
} = InvitationCodes;

class RSVP extends Component {
  matchesInvitationCode = (givenInvitationCode, invitationCode) => {
    return givenInvitationCode.toLowerCase() === invitationCode.toLowerCase();
  };

  showBoating = () => this.matchesInvitationCode(this.props.invitationCode, CELEBRATE);
  showRehearsal = () => this.matchesInvitationCode(this.props.invitationCode, CELEBRATE) || this.matchesInvitationCode(this.props.invitationCode, WARHOL);
  showGuests = () => this.matchesInvitationCode(this.props.invitationCode, CELEBRATE) || this.matchesInvitationCode(this.props.invitationCode, WARHOL) || this.matchesInvitationCode(this.props.invitationCode, PITTSBURGH);

  render() {
    const { close, isOpen } = this.props;

    return(
      <div>
        <form className='rsvp-form' action='https://formspree.io/joshkuiros@gmail.com' method='POST'>
          <div className='rsvp-label-input'>
            <div>Email Address*</div>
            <input id='email' name='email' placeholder='Enter email address' required/>
          </div>
          <div className='rsvp-label-input'>
            <div>Name*</div>
            <input id='name' name='name' placeholder='Enter first and last name' required/>
          </div>
          {this.showGuests() &&
              <div>
                <div className='rsvp-label-select'>
                  <div>Are you bringing anyone with you?*</div>
                  <select name='guests' className='select' required>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                  </select>
                </div>
                <div className='rsvp-label-input'>
                  <div>Guest Names</div>
                  <input id='guest_names' name='guest_names' placeholder='First and last name of guests'/>
                </div>
              </div>
          }
          <hr className='rsvp-divider' />
          <div>Please confirm your attendance:</div>
          {this.showBoating() &&
              <Flex className='rsvp-event'>
                <Box pr={3}>
                  <strong>Boating and Brews</strong>
                  <div>Friday, August 30th, 2019 at 6:30pm</div>
                  <div>Peggy's Harbor, Pittsburgh, PA</div>
                </Box>
                <Box>
                  <select name='boating' required>
                    <option value='yes'>Accepts</option>
                    <option value='no'>Declines</option>
                  </select>
                </Box>
              </Flex>
          }
          {this.showRehearsal() &&
              <Flex className='rsvp-event'>
                <Box pr={3}>
                  <strong>Rehearsal Dinner</strong>
                  <div>Saturday, August 31th, 2019 at 5:00pm</div>
                  <div>Vue 412, Pittsburgh, PA</div>
                </Box>
                <Box>
                  <select name='rehearsal' required>
                    <option value='yes'>Accepts</option>
                    <option value='no'>Declines</option>
                  </select>
                </Box>
              </Flex>
          }
          <Flex className='rsvp-event'>
            <Box pr={3}>
              <strong>Wedding Ceremony and Reception</strong>
              <div>Sunday, September 1st, 2019 at 5:00pm</div>
              <div>The Pennsylvanian, Pittsburgh, PA</div>
            </Box>
            <Box>
              <select name='wedding' required>
                <option value='yes'>Accepts</option>
                <option value='no'>Declines</option>
              </select>
            </Box>
          </Flex>
          <div className='rsvp-label-input'>
            <div>Any notes for us?</div>
            <textarea placeholder='Dietary restrictions, messages, etc' rows='2' name='messages'/>
          </div>
          <div className='rsvp-modal-footer'>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </div>

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
