import React from 'react'

const About = () => {
  return (
    <>
      <div className="about-content">
        <div className="letstalk">
          <h3 className="h3-title">Let's Talk</h3>
          <p>We collaborate with our thousands of service provider, enterpreneurs and complete legends</p>
          <hr className='about-hr' />

            <div className="about-email">
              <img src="/images/email.jpg" alt="email" />
                <div className="about-text">
                  <p><b>Our Email</b></p>
                  <p>servicehub18@gmail.com</p>
                </div>
            </div>

            <div className="about-call">
              <img src="/images/call.jpg" alt="call" />
                <div className="about-text">
                  <p><b>Call us</b></p>
                  <p>1234567890</p>
                </div>
            </div>

            <div className="about-find">
              <img src="/images/location.jpg" alt="location" />
                <div className="about-text">
                  <p><b>Find us</b></p>
                  <p>Open Google Maps</p>
                </div>
            </div>

            <hr className='about-hr'/>

              <div className="about-links">
                <a href="#"><img src="/images/facebook.png" alt="facebook" /></a>
                <a href="#"><img src="/images/instagram.png" alt="instagram" /></a>
                <a href="#"><img src="/images/linkedin.png" alt="linkedin" /></a>
              </div>
            </div>

            <form action="submit.php" method="post" className='about-form'>
              <div>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" required className='about-input' />
              </div>

              <div>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname" required className='about-input' />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required className='about-input' />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" required className='about-input' />
              </div>

              <label htmlFor="message">Message</label>
              <input type="text" id="message" name="message" required className='about-input' />

              <input type="submit" value="Submit Now" className='about-submit'/>
            </form>

            <div className="about-map">
              <img src="/images/map.jpg" alt="map" />
            </div>

            <div className="ourteam">
              <h1>Our Team</h1>

              <div className="team-section">
                <div className="team-member">
                  <div className="about-img">
                    <img src="/images/hemant.jpg" alt="Hemant Maurya" />
                      <div className="about-icon">
                        <a href="#"><img src="/images/facebook.png" alt="facebook" /></a>
                        <a href="#"><img src="/images/instagram.png" alt="instagram"/></a>
                        <a href="#"><img src="/images/linkedin.png" alt="linkedin"/></a>
                      </div>
                  </div>
                  <p className="member-name">Hemant Maurya</p>
                </div>

                <div className="team-member">
                  <div className="about-img">
                    <img src="/images/adarsh.jpg" alt="Adarsh Patel" />
                      <div className="about-icon">
                        <a href="#"><img src="/images/facebook.png" alt="facebook" /></a>
                        <a href="#"><img src="/images/instagram.png" alt="instagram" /></a>
                        <a href="#"><img src="/images/linkedin.png" alt="linkedin" /></a>
                      </div>
                  </div>
                  <p className="member-name">Adarsh Patel</p>
                </div>

                <div className="team-member">
                  <div className="about-img">
                    <img src="/images/darshit.jpg" alt="Darshit Yadav" />
                      <div className="about-icon">
                        <a href="#"><img src="/images/facebook.png" alt="facebook" /></a>
                        <a href="#"><img src="/images/instagram.png" alt="instagram" /></a>
                        <a href="#"><img src="/images/linkedin.png" alt="linkedin" /></a>
                      </div>
                  </div>
                  <p className="member-name">Darshit Yadav</p>
                </div>
              </div>

            </div>
        </div>
      </>
      )
}

      export default About
