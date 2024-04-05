import styled from 'styled-components'

const Wrapper = styled.section`
  align-items: center;
  display: grid;
  height: 100vh;
  grid-template-columns: 1.3fr 1fr;
  padding: var(--padding);
  color: var(--dark2);

  .landing-content {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 3.5rem;
  }

  .logo {
    position: fixed;
    top: var(--padding);
    left: var(--padding);
    width: 100px;
    height: 100px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    .landing-image {
      display: none;
    }
  }
`

export default Wrapper
