import React, { Component } from 'react'
import { navigate } from 'gatsby';
import InvitationCode from '../components/InvitationCode';
import Layout from '../components/layout';
import FormPage from '../components/FormPage';

class Invitation extends Component {
  constructor() {
    super();

    this.state = {
      invitationCode: '',
    };
  }

  openRSVP = () => {
    navigate('/rsvp', { state: this.state });
  }

  onInvitationCodeChange = ({ target: { value: invitationCode } }) => {
    this.setState({ invitationCode })
  }

  render() {
    const { invitationCode } = this.state;

    return (
      <Layout>
        <FormPage title='Welcome!'>
          <InvitationCode
            onInvitationCodeChange={this.onInvitationCodeChange}
            invitationCode={invitationCode}
            submit={this.openRSVP}
          />
        </FormPage>
      </Layout>
    );
  }
};

export default Invitation;
