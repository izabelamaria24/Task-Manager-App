import styled from 'styled-components'
import registerImg from '../images/register.jpg'

const Register = styled.section`
  color: var(--dark2);
  display: grid;
  height: 100vh;
  grid-template-columns: 60% 40%;

  @media (max-width: 992px) {
    grid-template-columns: 0 100%;
    background-color: var(--scheme4-2);
  }

  .register-left {
    background-image: url(${registerImg});
    background-color: var(--scheme4-2);
    background-repeat: no-repeat;
    background-size: contain;
  }

  .register-right {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .form-container {
      @media (max-width: 992px) {
        right: 0%;
        label {
          font-size: 1.25rem;
        }
      }

      padding: var(--padding);
      position: relative;
      width: 90%;
      height: 90%;
      background-color: white;
      right: 45%;
      z-index: 2;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      h1 {
        font-size: 3.2rem;
      }

      input {
        font-size: 1rem;
      }

      input:focus {
        padding-left: 2.2rem;
      }

      input:focus::placeholder {
        color: white;
      }

      form {
        height: 100%;
      }

      .btn-container {
        position: absolute;
        bottom: 2rem;

        .btn {
          width: 8rem;
          height: 3rem;
          font-size: 1.3rem;
          font-weight: 500;
          background-color: var(--scheme4-2);
          color: var(--dark2);
        }

        .link-container {
          padding-top: 1rem;
          a {
            color: var(--scheme4-2);
          }
        }
      }
    }
  }
`

export default Register
