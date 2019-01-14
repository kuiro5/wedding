import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import HeroMessage from '../components/HeroMessage'
import Section from '../components/Section'
import Footer from '../components/Footer'
import SEO from '../components/seo'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Josh & Rach Wedding" keywords={[`josh kuiros`, `rachel morelli`, `wedding`]} />
      <Hero>
        <Navigation />
        <HeroMessage />
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
    </Layout>
  )
}

export default IndexPage
