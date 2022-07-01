import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export const Login = () => {
  window.scrollTo(0, 0)

  return (
    <div>
      <Header />
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <form className='login col-md-8 col-lg-4 col-11'>
          <input type={'email'} placeholder='email' />
          <input type={'password'} placeholder='password' />
          <button type='submit'>Login</button>
          <p>
            <Link to={"/register"}>Create account</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
