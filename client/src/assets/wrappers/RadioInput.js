import styled from 'styled-components'

const RadioInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  + label:before {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    top: 50%;
    left: 90%;
    transform: translate(-50%, -50%);

    border: 2px solid black;
    border-radius: 50%;
  }

  &:checked + label:before {
    background-color: ${(props) =>
      props.category === 'work'
        ? 'blue'
        : props.category === 'personal'
        ? 'orange'
        : props.category === 'study'
        ? 'purple'
        : '#5c9e54'};
  }
`
export default RadioInput
