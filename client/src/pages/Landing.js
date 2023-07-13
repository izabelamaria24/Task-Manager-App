import React from 'react'
import landing from '../assets/landing.svg'
import logo from '../assets/logo.png'
import Wrapper from '../assets/wrappers/Landing'

const Landing = () => {
  return (
    <Wrapper>
      <img src={logo} alt='logo' className='logo'></img>
      <section className='landing-content'>
        <h1>Welcome to Blossom!</h1>
        <section className='btn-container'>
          <button className='btn btn-block register-btn'>Register</button>
          <button className='btn btn-block login-btn'>Login</button>
        </section>
      </section>
      <section className='landing-image'>
        <img src={landing} className='img' alt='landing-img'></img>
      </section>
    </Wrapper>
  )
}

export default Landing
