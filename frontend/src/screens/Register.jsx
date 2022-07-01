import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Register = () => {
  window.scrollTo(0, 0)

  return (
    <div>
      <Header />
      <div className='container d-flex flex-column justify-content-center'>
        <form className='login col-md-8 col-lg-4 col-11'>
          <input type={"text"} placeholder="User name" />
          <input type={"email"} placeholder="Email" />
          <input type={"password"} placeholder="Password" />
          <button type='submit'>Register</button>
          <p>
            <Link to="/login">
              Have an account?<strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register