import styled from 'styled-components'

const AddTask = styled.section`
  padding: var(--padding);
  
  .add-task-form {
    width: 100%;
  }
  
  .add-task {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--scheme2-1);
  }

  .task-title-input {
    padding: 0.5rem;
    font-size: 1rem;
    margin: 1rem 0;
  }
  
  .add-task-subsection {
    color: var(--scheme2-1);
    font-size: 1.25rem;
    margin-top: 5rem;
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
  
  @media (max-width: 768px) {
    .select-hour {
      width: 40%; 
    }
  }

  .btn {
    margin-top: 2rem;
  }
  
  @media (max-width: 768px) {
    .categories {
      grid-template-columns: 1fr;
      column-gap: 0;
      //width: 250px;
    }    
  }
`

export default AddTask
