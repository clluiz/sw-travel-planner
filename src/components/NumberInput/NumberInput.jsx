import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './numberinput.css'

const NumberInput = (props) => {
  const { min, onBlur } = props

  const [value, setValue] = useState(props.value)

  function onChangeValue(event) {
    setValue(event.target.value);
  }

  return (
    <input
      className="number-input"
      min={min}
      onBlur={() => onBlur(value)} 
      onChange={onChangeValue} 
      placeholder="Type the distance ( in mega lights )" 
      type="number" 
      value={value}
    />
  )
};

NumberInput.propTypes = {
  min: PropTypes.number,
  onBlur: PropTypes.func
}

NumberInput.defaultProps = {
  min: 1
}

export default NumberInput