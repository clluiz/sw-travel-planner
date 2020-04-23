import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

const Button = ({ label, onClick, visible }) => {

  return (
    <button
      className="button"
      onClick={event => onClick(event)}
      style={{ visibility: visible ? 'visible' : 'hidden' }}
      tabIndex={-1} 
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button

