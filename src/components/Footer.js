import React from 'react'

const Footer = () => {
    return (
        <>
             {/* Footer  */}
            <div className="footer">
                <img className="footer-logo" src="/images/logo.png" alt="" />
                    <span className="footer-title">Service Hub</span>

                    <ul>
                        <li className="footer-list"><a href="">Home</a></li>
                        <li className="footer-list"><a href="">Register as Professional</a></li>
                        <li className="footer-list"><a href="">My Bookings</a></li>
                        <li className="footer-list"><a href="">About Us</a></li>
                        <li className="footer-list"><a href="">Policy</a></li>
                        <li className="footer-list"><a href="">Login/Signup</a></li>
                        <li className="footer-list"><a href="">Password Protected </a></li>
                    </ul>

                    <h2 className="sub">Subscribe</h2>
                    <div className="footer-form">
                        <input className="footer-input" type="text" placeholder="Enter your email" />
                            <button className="footer-btn">Subscribe</button>
                    </div>
                    <div className="horizontal">
                        <hr />
                    </div>

                    <div className="footer-detail">
                        <div className="detail-list">
                            <p>Copyright by </p>
                            <p>Designed by HAWKS</p>
                        </div>
                        <div className="detail-list">
                            <p>Contact Us</p>
                            <p>9999888822</p>
                        </div>
                        <div className="detail-list">
                            <p>Address</p>
                            <p>A.D Patel Institute of Technology</p>
                            <p>,New V.V Nagar,Anand</p>
                        </div>

                        <div className="detail-social">
                            <a href=""><i className="fa-brands fa-facebook" style={{color: "#FFFFFF", backgroundColor: "black"}}></i></a>
                            <a href=""><i className="fa-brands fa-instagram" style={{color: "#FFFFFF", backgroundColor: "black"}}></i></a>
                            <a href=""><i className="fa-brands fa-linkedin" style={{color: "#FFFFFF", backgroundColor: "black"}}></i></a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Footer
