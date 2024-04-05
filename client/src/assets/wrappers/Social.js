import styled from 'styled-components'

const Social = styled.section`
  padding: var(--padding);

  .social {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input {
      padding: 0.75rem;
      font-size: 1rem;
    }

    button {
      width: 100px;
      height: 50px;
    }
  }
  
  .possible-requests {
    margin-top: 2rem;
    
    article {
      margin: 1rem 0;
      padding: 3% 1%;
      background-color: white;
      width: 50%;
      display: flex;
      flex-direction: column;
      
      button {
        font-size: 0.8rem;
      }
      
      .request-username {
        font-size: 1.1rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    input {
      width: 50%;
    }
  }
`
export default Social
