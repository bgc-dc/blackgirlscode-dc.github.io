import React from 'react'
import Link from 'gatsby-link'

const ContactUsPage = () => (
  <div>
    <h1> Contact BGC DC Chapter </h1>
    <form method="POST">
      <p>
          Are you interested in launching Black Girls Code in your area? Have questions about Black Girls Code DC? We look forward to hearing from you!
      </p>
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name"/>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/>

        <p>
          How can we help you?
        </p>
        <input type="radio" name="volunteer" /> I want to volunteer<br/>
        <input type="radio" name="chapter" /> I need help starting a chapter <br/>
        <input type="radio" name="participate"/> I have a child who would like to participate in a club

        <label htmlFor="message">
          Give a brief description on what you would like for us to assist.
        </label>
        <textarea name="message" rows="5">

        </textarea>

        <input type="submit"/>
    </form>
  </div>
)

export default ContactUsPage


// https://github.com/Ciunkos/creating-contact-forms-with-nodemailer-and-react
