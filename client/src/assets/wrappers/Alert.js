import styled from 'styled-components'

const Alert = styled.section`
  .alert-icon {
    width: 45px;
    height: 45px;
  }

  z-index: 4;
  position: fixed;
  bottom: 1.5rem;
  right: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1.5rem;
  padding: 0.5rem;

  background-color: ${(props) =>
    props.type === 'error'
      ? 'var(--error-1)'
      : props.type === 'success'
      ? 'var(--success-1)'
      : 'var(--warning-1)'};
  color: var(--dark-1);
  width: 300px;
  height: 75px;

  border: 2px solid
    ${(props) =>
      props.type === 'error'
        ? 'var(--error-2)'
        : props.type === 'success'
        ? 'var(--success-2)'
        : 'var(--warning-2)'};
  border-radius: 1rem;
`

export default Alert
