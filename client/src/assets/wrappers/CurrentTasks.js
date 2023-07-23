import styled from 'styled-components'

const CurrentTasks = styled.section`
  /* padding: var(--padding); */

  .calendar {
    display: flex;
    column-gap: 2rem;
    background-color: var(--scheme2-4);
    color: #baafaf;

    article {
      padding: 1%;

      .week {
        margin-bottom: 0.5rem;
        font-size: 1.75rem;
        font-weight: 500;
      }
    }
  }
`

export default CurrentTasks
