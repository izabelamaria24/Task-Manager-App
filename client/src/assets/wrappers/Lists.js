import styled from 'styled-components'

const Lists = styled.section`
  padding: var(--padding);

  .lists-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;

    article {
      .list-name {
        padding: 0.5rem 0;
      }
    }
  }
`

export default Lists
