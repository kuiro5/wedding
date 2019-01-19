import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import HeroMessage from '../components/HeroMessage'
import Section from '../components/Section'
import Footer from '../components/Footer'
import RSVP from '../components/RSVP'
import SEO from '../components/seo'
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
          Rach and Josh met at Penn State...
        </Section>
        <Section title={'Details'} id={'details'}>
          Rooms are blocked at Hotel Monaco and the Westin.
        </Section>
        <Section title={'RSVP'} id={'rsvp'}>
          We are excited to celebrate with you!
        </Section>
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
