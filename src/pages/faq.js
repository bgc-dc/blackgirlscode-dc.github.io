import React from 'react'
import Link from 'gatsby-link'

import '../css/faq.css'

const FaqPage = () => (
  <div className="faq">
    <h1>Hi from the faq page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default FaqPage
