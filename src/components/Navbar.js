import React from 'react'
import {Link
} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <div className="Nabar">
        <nav>
            <ul className='nav-bar'>
                <li className='logo'><Link to='/'><img src='/images/logo.png' /> Service Hub</Link></li>
                <input type='checkbox' id='check' />
                <span className="menu">
                    <li><Link  to="/">Home</Link></li>
                    {/* <li><Link  to="/bookings">My Bookings</Link></li> */}
                    <li><Link  to="/about">About Us</Link></li>
                    <li><Link  to="/professional">Professional</Link></li>
                    <li><Link  to="/login">Login</Link></li>
                    <li><Link  to="/signup">SignUp</Link></li>
                    <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
                </span>
                <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar
