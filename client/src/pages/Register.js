import Wrapper from '../assets/wrappers/Register'
import { FormRow } from '../components'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [state, setState] = useState({ email: '', password: '', name: '' })

  const handleChange = (e) => {
    e.preventDefault()
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const [isMember, setIsMember] = useState(false)

  const toggleMember = () => {
    setIsMember(!isMember)
  }

  return (
    <Wrapper>
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
                onClick={() => console.log('registered')}
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
