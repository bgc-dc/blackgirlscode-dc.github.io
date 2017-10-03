import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import logo from '../../assets/bgc-logo-white.png'
import '../../css/header.css'


const Header = () => (
  <div id="header-container">
    <div id="wrapper">
      <div className="logo">
        <Link
          to="/"
        >
          <img className="bgc-logo" src={logo}/>
            <p className="chapter">DC Chapter</p>
        </Link>
      </div>
      <input type="checkbox" id="menu-toggle"/>
      <label htmlFor="menu-toggle" className="label-toggle"></label>
      <ul>
        <li>
          <Link
            to="/about"
            > About
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            > Events
          </Link>
        </li>
        <li>
          <Link
            to="/resources"
            > Resources
          </Link>
        </li>
        <li>
          <Link
            to="/volunteer"
            > Volunteer
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            > FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            > Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
