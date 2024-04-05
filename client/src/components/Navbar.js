import Wrapper from '../assets/wrappers/Navbar'
import profileImg from '../assets/images/profile.png'
import sidebarImg from '../assets/icons/sidebar.png'
import { useState } from 'react'
import { useAppContext } from '../context/appContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [profile, toggleProfile] = useState(false)
  const { toggleSidebar, logout } = useAppContext()

  const logoutButton = () => {
    toggleProfile(false)
    logout()
  }

  return (
    <Wrapper>
      <button onClick={toggleSidebar} className='btn sidebar-btn'>
        <img src={sidebarImg} />
      </button>

      <section className='profile-btn-section'>
        <button
          onClick={() => {
            toggleProfile(!profile)
          }}
          className='btn profile-btn'
        >
          <img src={profileImg} className='profile-img' alt='profile' />
        </button>

        <section
          className={`${
            profile
              ? 'profile-btn-section-toggle on'
              : 'profile-btn-section-toggle'
          }`}
        >
          <button
            onClick={() => toggleProfile(false)}
            className='btn btn-block'
          >
            <Link to='/profile'>Profile</Link>
          </button>
          <button
            onClick={logoutButton}
            className='btn btn-block'
          >
            Logout
          </button>
        </section>
      </section>
    </Wrapper>
  )
}

export default Navbar
