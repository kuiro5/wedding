import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import HeroMessage from '../components/HeroMessage'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Josh & Rach Wedding" keywords={[`josh kuiros`, `rachel morelli`, `wedding`]} />
    <Hero>
      <Navigation />
      <HeroMessage />
    </Hero>
  </Layout>
)

export default IndexPage
