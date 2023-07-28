import Wrapper from '../assets/wrappers/RadioFormRow'
import RadioInput from '../assets/wrappers/RadioInput'

const RadioFormRow = ({
  labelText,
  name,
  value,
  handleChange,
  checked,
  imgUrl,
}) => {
  return (
    <Wrapper category={value}>
      <RadioInput
        id={value}
        onChange={handleChange}
        type='radio'
        name={name}
        value={value}
        checked={checked}
        category={value}
      ></RadioInput>
      <label htmlFor={value}>
        <img src={imgUrl} alt='category-img'></img>
        {labelText || name}
      </label>
    </Wrapper>
  )
}

export default RadioFormRow
