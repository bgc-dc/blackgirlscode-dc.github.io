import React from 'react'
import Link from 'gatsby-link'

import '../css/about.css'

const AboutPage = () => (
  <div id="about" >
    <div className="about-left">
      <img src="https://www.iisd.org/ela/wp-content/themes/iisd-ela/images/background/desktop/01_lake_2.jpg"/>

    </div>
    <div className="about-right">
      {/* <img src="https://www.iisd.org/ela/wp-content/themes/iisd-ela/images/background/desktop/01_lake_2.jpg"/> */}
    </div>
    {/* <section>
      <div className="about-left">

      </div>
      <div className="about-right">
        <div class="tabs">
          <ul>
            <li>DC Chapter</li>
            <li>Black Girls Code</li>
            <li>What We Offer</li>
          </ul>
        </div>

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
    </section> */}
  </div>
)

export default AboutPage
