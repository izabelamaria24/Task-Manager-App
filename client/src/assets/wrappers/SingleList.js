import styled from 'styled-components'

const SingleList = styled.section`
  padding: var(--padding);
  
  .list-name {
    color: var(--scheme2-1);
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  @counter-style repeating-emoji {
    system: cyclic;
    symbols: "\\1F431" "\\1F436" "\\1F984"; // unicode code point
    suffix: " ";
  }
  
  .list-items {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      padding-left: 1rem;
      text-indent: -0.7rem;
      margin: 0.8rem 0;
      text-transform: capitalize;
    }

    li:nth-child(3n+1)::before {
      content: "🐱 ";
    }

    li:nth-child(3n+2)::before {
      content: "🐶 ";
    }

    li:nth-child(3n)::before {
      content: "🦄 ";
    }
  }


`

export default SingleList