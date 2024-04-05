import styled from 'styled-components'

const AddTask = styled.section`
  padding: var(--padding);

  .task-title-input {
    padding: 0.5rem;
    font-size: 1rem;
    margin: 1rem 0;
  }
  
  .add-task-subsection {
    margin-top: 3rem;
    color: var(--scheme2-1);
  }

  .categories {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
  }
  
  .select-hour {
    margin-top: 1rem;
    width: 15%;
    height: 2rem;
  }

  .btn {
    margin-top: 2rem;
  }
`

export default AddTask
