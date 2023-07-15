import styled from 'styled-components'

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2rem 0 2rem 0;

  label {
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .input-container {
    width: 100%;
    height: 3rem;
    position: relative;
  }

  input {
    z-index: 3;
    padding: 2%;
    width: 100%;
    height: 100%;
    display: block;
    border: 2px solid #e4ebe5;
    outline: none;
    cursor: pointer;
  }

  input:focus {
    border: 2.5px solid var(--scheme3-2);
    box-shadow: rgba(210, 97, 140, 0.2) 0px 7px 29px 0px;
  }

  input::placeholder {
    text-transform: capitalize;
    padding-left: 2rem;
  }

  .icon {
    position: relative;
    bottom: 2rem;
    left: 1rem;
    z-index: 2;
    width: 25px;
    height: 25px;
  }

  .disable {
    display: none;
  }
`

export default FormRow
