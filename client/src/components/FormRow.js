import Wrapper from '../assets/wrappers/FormRow'
import React from 'react'

const FormRow = ({ labelText, name, value, icon, handleChange, type }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{labelText || name}</label>
      <div className='input-container'>
        <input
          onChange={handleChange}
          name={name}
          value={value}
          placeholder={name}
          type={type}
        />
        <div className={`${value === '' ? 'icon' : 'icon disable'}`}>
          {icon}
        </div>
      </div>
    </Wrapper>
  )
}

export default FormRow
