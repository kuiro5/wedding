import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import HeroMessage from '../components/HeroMessage';
import Section from '../components/Section';
import Footer from '../components/Footer';
import RSVP from '../components/RSVP';
import SEO from '../components/seo';
import OurStory from '../components/OurStory';
import Details from '../components/Details';
import Stay from '../components/Stay';
import SaveTheDate from '../components/SaveTheDate';
import RSVPFooter from '../components/RSVPFooter';
import './styles.css'

class IndexPage extends Component  {
  constructor() {
    super();

    this.state = { showRSVP: false };
  }

  render() {
    const { showRSVP } = this.state;

    return(
      <Layout>
        <SEO title="Josh & Rach Wedding" keywords={[`josh kuiros`, `rachel morelli`, `wedding`]} />
        <Hero>
          <Navigation />
          <HeroMessage openRSVP={this.openRSVP} />
        </Hero>
        <Section title={'Our Story'} id={'our-story'}>
          <OurStory />
        </Section>
        <SaveTheDate />
        <Section title={'Details'} id={'details'}>
          <Details />
        </Section>
        <Section title={'Stay'} id={'stay'}>
          <Stay />
        </Section>
        <RSVPFooter />
        <Footer />
        <RSVP isOpen={showRSVP} close={this.closeRSVP} />
      </Layout>
    )
  }

  openRSVP = () => {
    this.setState({ showRSVP: true });
  }

  closeRSVP = () => {
    this.setState({ showRSVP: false });
  }
}

export default IndexPage
