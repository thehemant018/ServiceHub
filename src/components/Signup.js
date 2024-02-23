import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="signup">

        <div className="container">
          <h1>Sign Up</h1>
          <p>Open the door to efficiency. Your personalized experience awaits within Service Hub</p>

          <form action="#">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Enter Your Name..." />
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Example@email.com" />
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="At least 8 characters" />
            <a href="#">Forgot Password</a>
            <input type="submit" value="Sign Up" />
          </form>

          <hr className="left" />
          OR
          <hr className="right" />

          <div className="social-button">
            <img src="/images/google-icon.jpg" alt="Google" />
            Sign in with Google
          </div>
          <div className="social-button">
            <img src="/images/facebook-icon.jpg" alt="Facebook" />
            Sign in with Facebook
          </div>

          <p className="footer-login">Already have an account? <a href="#">Sign in</a></p>

        </div>

        <div className="img">
          <img src="/images/art 1.png" alt="Art" />
        </div>

      </div>
    </>
  )
}

export default Signup
