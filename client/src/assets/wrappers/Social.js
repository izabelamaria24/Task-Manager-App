import styled from 'styled-components'

const Social = styled.section`
  padding: var(--padding);

  .social {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input {
      padding: 0.75rem;
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    button {
      width: 100px;
      height: 50px;
    }
  }
`
export default Social
