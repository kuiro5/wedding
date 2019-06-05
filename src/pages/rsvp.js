import React, { Component } from 'react'
import { navigate } from 'gatsby';
import InvitationCode from '../components/InvitationCode';
import Layout from '../components/layout';
import FormPage from '../components/FormPage';
import RSVP from '../components/RSVP';

class RSVPPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { location: { state } } = this.props;

    if(!state || !state.invitationCode) {
      navigate('/');
    }
  }

  render() {
    const { location: { state } } = this.props;

    if(!state || !state.invitationCode) {
      return null;
    }

    return (
      <Layout>
        <FormPage title='RSVP'>
          <RSVP
            invitationCode={state.invitationCode}
          />
        </FormPage>
      </Layout>
    );
  }
};

export default RSVPPage;
