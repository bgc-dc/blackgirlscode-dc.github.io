import React from 'react'
import Link from 'gatsby-link'

import '../css/about.css'

const AboutPage = () => (
  <div id="about">
    <h1>Hi from the about page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage
