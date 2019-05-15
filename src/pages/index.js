import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import HeroMessage from '../components/HeroMessage';
import Section from '../components/Section';
import Footer from '../components/Footer';
import RSVP from '../components/RSVP';
import InvitationCode from '../components/InvitationCode';
import SEO from '../components/seo';
import OurStory from '../components/OurStory';
import Details from '../components/Details';
import Pittsburgh from '../components/Pittsburgh';
import Accomodations from '../components/Accomodations';
import SaveTheDate from '../components/SaveTheDate';
import RSVPFooter from '../components/RSVPFooter';
import ModalIDs from '../constants/modalIDs';
import './styles.css'

class IndexPage extends Component  {
  constructor() {
    super();

    this.initialState = {
      modalID: null,
      invitationCode: '',
    };
    this.state = this.initialState;
  }

  render() {
    const { modalID, showRSVP, invitationCode } = this.state;

    return(
      <Layout>
        <SEO title="Josh + Rach" keywords={[`josh kuiros`, `rachel morelli`, `wedding`]} />
        <Hero>
          <Navigation />
          <HeroMessage openRSVP={this.openInvitationCode} />
        </Hero>
        <Section id={'our-story'} showCross>
          <OurStory />
        </Section>
        <Section id={'details'}>
          <Details />
        </Section>
        <Section id={'pittsburgh'}>
          <Pittsburgh />
        </Section>
        <SaveTheDate />
        <Section id={'stay'}>
        <Accomodations />
        </Section>
        <RSVPFooter openRSVP={this.openInvitationCode}/>
        <InvitationCode
          invitationCode={invitationCode}
          onInvitationCodeChange={this.onInvitationCodeChange}
          isOpen={modalID === ModalIDs.INVITATION_CODE}
          close={this.closeModal}
          submit={this.openRSVP}
        />
        <RSVP isOpen={modalID === ModalIDs.RSVP} close={this.closeModal} />
      </Layout>
    )
  }


  onInvitationCodeChange = ({ target: { value: invitationCode } }) => {
    this.setState({ invitationCode })
  }

  openInvitationCode = () => {
    this.setState({ modalID: ModalIDs.INVITATION_CODE });
  }

  openRSVP = () => {
    this.setState({ modalID: ModalIDs.RSVP });
  }

  closeModal = () => {
    this.setState({ ...this.initialState });
  }
}

export default IndexPage
