import styled from 'styled-components'

const RadioFormRow = styled.div`
  background-color: white;
  position: relative;

  display: flex;
  align-items: center;
  padding: var(--padding);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  color: ${(props) =>
    props.category === 'work'
      ? 'blue'
      : props.category === 'study'
      ? 'purple'
      : props.category === 'personal'
      ? 'orange'
      : '#5c9e54'};

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-transform: capitalize;

    img {
      margin-right: 1rem;
      width: 50px;
      height: 50px;
    }
  }
`

export default RadioFormRow
