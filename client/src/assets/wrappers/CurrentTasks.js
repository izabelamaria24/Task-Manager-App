import styled from 'styled-components'

const CurrentTasks = styled.section`
  padding: 5% 8%;

  .username {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--scheme2-1);
  }

  .calendar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
    
    article {
      padding: 5%;
      background-color: var(--scheme1-red);
      color: white;
      border-radius: 2%;
      align-self: start;

      .week {
        margin-bottom: 0.5rem;
        font-size: 1.75rem;
        font-weight: 500;
      }

      .tasks {
        margin-top: 1rem;
        text-transform: capitalize;
        h1 {
          padding: 0.5rem 0;
          font-size: 1rem;
          color: var(--scheme2-1);
        }

        .line {
          text-decoration-line: line-through;
        }
      }
    }

    input[type='checkbox'] {
      position: relative;
      width: 1.5em;
      height: 1.5em;
      color: #363839;
      border: 1px solid #bdc1c6;
      border-radius: 4px;
      appearance: none;
      outline: 0;
      cursor: pointer;
      transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 2px;
        left: 7px;
        width: 8px;
        height: 14px;
        border-style: solid;
        border-color: #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
      }
      &:checked {
        color: #fff;
        border-color: #06842c;
        background: #06842c;
        &::before {
          opacity: 1;
        }
        ~ label::before {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
      }
    }

    label {
      position: relative;
      cursor: pointer;
      font-size: 1.2em;
      font-weight: 600;
      padding: 0 0.25em 0;
      user-select: none;
      &::before {
        position: absolute;
        content: attr(data-content);
        color: #9c9e9f;
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        text-decoration: line-through;
        text-decoration-thickness: 3px;
        text-decoration-color: #9c9e9f;
        transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
  }
  
  @media (max-width: 768px) {
    .calendar {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default CurrentTasks