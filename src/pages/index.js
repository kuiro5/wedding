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
import Pittsburgh from '../components/Pittsburgh';
import Accomodations from '../components/Accomodations';
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
        <SEO title="Josh + Rach" keywords={[`josh kuiros`, `rachel morelli`, `wedding`]} />
        <Hero>
          <Navigation />
          <HeroMessage openRSVP={this.openRSVP} />
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
        <RSVPFooter openRSVP={this.openRSVP}/>
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
