import React from 'react'

const Login = () => {
  return (
    <>
      <div className="login">

        <div className="container">
          <h1>Welcome Back👋</h1>
          <p>Open the door to efficiency. Your personalized experience awaits within Service Hub</p>

          <form action="/">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Example@email.com" />
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="At least 8 characters" />
            <a href="/">Forgot Password</a>
            <input type="submit" value="Sign In" />
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

          <p className="footer-login">Don't have an account? <a href="#">Sign up</a></p>

        </div>

        <div className="img">
          <img src="/images/art 1.png" alt="Art" />
        </div>

      </div>
    </>
  )
}

export default Login
