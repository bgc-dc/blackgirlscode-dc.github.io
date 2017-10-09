import React from 'react'
import Link from 'gatsby-link'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

import '../css/about.css'
import bgc_image_one from '../assets/girl-tablet.png'
import bgc_image_two from '../assets/girl-computer.jpg'
import bgc_image_three from '../assets/girls-classroom.jpg'

const AboutPage = () => (
    <div className="about">
      {/* <div className="sub-nav">
        <ul className="about-nav">
          <li><AnchorLink offset='100' href="#bgc-link">Black Girls Code</AnchorLink></li>
          <li><AnchorLink offset='100' href="#dc-link">DC Chapter</AnchorLink></li>
          <li><AnchorLink offset='100' href="#wwo-link">What We Offer</AnchorLink></li>
        </ul>
      </div> */}

      <section id="bgc-link">
        <div id="first-about" className="about-left">
          <div className="image-one">
          </div>
        </div>
        <div className="about-right">
          <div className="about-content">
            <h1>Black Girls Code</h1>
            <p>Black Girls Code is global organization with the mission to increase the number of women of color in the digital space by empowering girls of color ages 7 to 17 to become innovators in STEM fields, leaders in their communities, and builders of their own futures through exposure to computer science and technology. To provide African-American youth with the skills to occupy some of the 1.4 million computing job openings expected to be available in the U.S. by 2020, and to train 1   million girls by 2040.</p>
          </div>
        </div>
      </section>

      <section id="dc-link">
        <div className="about-left">
          <div className="image-two">
          </div>
        </div>
        <div className="about-right">
          <div className="about-content">
            <h1>DC Chapter</h1>
            <p>The DC Chapter is dedicated to serving all young girls within the Maryland, Viriginia and District of Colombia area.  Our goal is to fulfill the mission of our global organization, Black Girls Code by providing resources and workshops in the various opportunities in the technology industry.</p>
          </div>
        </div>
      </section>

      <section id="wwo-link">
        <div className="about-left">
          <div className="image-three">
          </div>
        </div>
        <div className="about-right">
          <div className="about-content">
            <h1>What We Offer </h1>
            <p>
              Black Girls Code is focused on providing a fun, collaborative and inspiring curriculum that was created to expose a series of skills such as game, mobile and web development and robotics. The girls learn in depth about tech industry and how to work within team and build leadership skills
              whish is fundamental for success. To learn more visit our <Link to="/faq" style={{color:"#000000"}}>FAQ</Link>
            </p>
          </div>
        </div>
      </section>



    {/* <div className="about-right">
      <div className="container">

          <section className="about-content">
            <h1>DC Chapter</h1>
            <p>The DC Chapter is dedicated to serving all young girls within the Maryland, Viriginia and District of Colombia area.  Our goal is to fulfill the mission of our global organization, Black Girls Code by providing resources and workshops in the various opportunities in the technology industry.</p>
          </section>
          <section className="about-content">
            <h1>Black Girls Code</h1>
            <p>Black Girls Code is global organization with the mission to increase the number of women of color in the digital space by empowering girls of color ages 7 to 17 to become innovators in STEM fields, leaders in their communities, and builders of their own futures through exposure to computer science and technology. To provide African-American youth with the skills to occupy some of the 1.4 million computing job openings expected to be available in the U.S. by 2020, and to train 1 million girls by 2040.</p>
          </section>
          <section className="about-content">
            <h1>What We Offer </h1>
            <p>Visit our <Link to="/faq">FAQ</Link></p>
          </section>
      </div>
    </div> */}
</div>
)

export default AboutPage
