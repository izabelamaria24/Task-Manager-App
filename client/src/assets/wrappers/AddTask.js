import styled from 'styled-components'

const AddTask = styled.section`
  padding: var(--padding);

  .task-title-input {
    padding: 0.5rem;
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  .categories {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
  }

  .add-task-btn {
    padding: 1rem 2rem;
    margin-top: 2rem;
    font-size: 1.2rem;
    background-color: var(--scheme3-2);
    color: black;
    font-weight: 500;
  }
`

export default AddTask
