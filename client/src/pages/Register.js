import Wrapper from '../assets/wrappers/Register'
import { FormRow } from '../components'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

import { Alert } from '../components'

const Register = () => {
  const { login, register, showAlert, displayAlert, user } = useAppContext()

  const [state, setState] = useState({ email: '', password: '', name: '' })
  const [isMember, setIsMember] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, password, name } = state
    if (!email || !password || (!name && !isMember)) {
      displayAlert('warning', 'Please provide all values!')
      return
    }

    const user = { email, password, name }

    // if user is not a member, register, else login
    if (!isMember) register(user)
    else login(user)
  }

  const toggleMember = () => {
    setIsMember(!isMember)
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user])

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <section className='register-left'></section>
      <section className='register-right'>
        <section className='form-container'>
          <h1>{`${isMember ? 'Login' : 'Register'}`}</h1>
          <form action='submit'>
            {!isMember && (
              <FormRow
                icon={<RiLockPasswordLine />}
                handleChange={(e) => handleChange(e)}
                value={state.name}
                name='name'
                type='text'
                labelText='name'
              />
            )}
            <FormRow
              icon={<HiOutlineMail />}
              handleChange={(e) => handleChange(e)}
              value={state.email}
              name='email'
              labelText='email'
              type='email'
            />
            <FormRow
              icon={<BsPersonCircle />}
              handleChange={(e) => handleChange(e)}
              value={state.password}
              name='password'
              labelText='password'
              type='password'
            />

            <div className='btn-container'>
              <button
                type='submit'
                onClick={(e) => handleSubmit(e)}
                className='btn register-btn'
              >
                {`${isMember ? 'Login' : 'Register'}`}
              </button>
              <h3 className='link-container'>
                {`${
                  isMember
                    ? "You don't have an account? "
                    : 'Already a member? '
                }`}
                <Link onClick={toggleMember}>
                  {`${isMember ? 'Register' : 'Login'}`}{' '}
                </Link>
              </h3>
            </div>
          </form>
        </section>
      </section>
    </Wrapper>
  )
}

export default Register
