import styled from 'styled-components'

const Error = styled.section`
  align-items: center;
  display: grid;
  height: 100vh;
  grid-template-columns: 1.3fr 1fr;
  padding: var(--padding);
  color: var(--dark2);

  .error-content {
    width: 70%;
  }

  h1 {
    font-size: 3.5rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    .error-image {
      display: none;
    }
  }
`

export default Error
