import React from 'react'
import {Link
} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-hero">
        <div className="backframe">
          <div>
            <h1 className="nav-title">Connecting <span className="inner">Needs</span> with <span
              className="inner">Expertise</span>
              : Your Gateway to Seamless Services</h1>
            <p className="nav-desc">Service Hub is an web-app that connects users with local service professionals for
              various home services
              including home repairs, grooming and wellness.</p>
            <Link to="/bookservice" class="nav-btn-2"><i className="fa-solid fa-circle-right" style={{ color: "#000000" }}></i>  Start Journey</Link>
          </div>

          <div className="background">
            <div className="background-circle-1"><div className="background-circle-2"><img className="nav-img" src="/images/Ellipse 10.png" alt="" /></div></div>
          </div>

        </div>
      </div>

      {/* Body  */}
      <div className="Body">
        <h2 className="body-head">Our Services</h2>
        <h1 className="body-title">Why Service Hub?</h1>

        <div className="services">
          <div className="box">
            <p className="body-logo "><i className="fa-solid fa-pen" style={{color: "black"}}></i></p>
            <h3 className="body-content">100% Quality Assurance</h3>
            <p className="body-desc">If you don’t like our services ,we will make it right.</p>
          </div>
          <div className="box">
            <p className="body-logo "><i className="fa-solid fa-pen-nib" style={{color:"white"}}></i></p>
            <h3 className="body-content"> Transparent Pricing </h3>
            <p className="body-desc">See actual prices before you book. No hidden charge.</p>
          </div>
          <div className="box">
            <p className="body-logo"><i className="fa-solid fa-volume-high" style={{color: "#000000"}}></i></p>
            <h3 className="body-content">Expert Only</h3>
            <p className="body-desc">Our professionals are well trained and have on-job expertise.</p>
          </div>
          <div className="box">
            <p className="body-logo"><i className="fa-solid fa-palette" style={{color: "white"}}></i></p>
            <h3 className="body-content">Fully Equipped</h3>
            <p className="body-desc">We bring everything needed to get the job done well.</p>
          </div>
          <div className="box">
            <p className="body-logo"><i className="fa-solid fa-user" style={{color:" #000000"}}></i></p>
            <h3 className="body-content">24 x 7 Support</h3>
            <p className="body-desc">Unwavering support, day or night . Your reliable 24x7 service partner .</p>
          </div>
          <div className="box">
            <p className="body-logo"><i className="fa-regular fa-gem" style={{color: "white"}}></i></p>
            <h3 className="body-content">Brand Identity </h3>
            <p className="body-desc">It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience. </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
