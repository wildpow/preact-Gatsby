// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import { Link } from 'gatsby'
import { styled } from 'linaria/react'
import { css } from 'linaria'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const title = css`
  font-size: 20rem;
`
const Ptag = styled.p`
  font-size: 4rem;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={title}>Hi people</h1>
    <Ptag>Welcome to your new Gatsby site.</Ptag>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
