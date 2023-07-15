import React from 'react'
import landing from '../assets/images/landing.svg'
import logo from '../assets/images/logo.png'
import Wrapper from '../assets/wrappers/Landing'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <img src={logo} alt='logo' className='logo'></img>
      <section className='landing-content'>
        <h1>Welcome to Blossom!</h1>
        <section className='btn-container'>
          <Link to='/register'>
            <button className='btn btn-block register-btn'>
              Login / Register
            </button>
          </Link>
        </section>
      </section>
      <section className='landing-image'>
        <img src={landing} className='img' alt='landing-img'></img>
      </section>
    </Wrapper>
  )
}

export default Landing
