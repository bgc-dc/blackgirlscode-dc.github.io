import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from './partials/header'
import Footer from './partials/footer'

import './index.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Black Girls Code | DC"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        height: '80%',
        padding: '0',
        // overflowY: 'hidden',
        // paddingBottom: '5%',
        // paddingTop: '15%',
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
