import React from 'react'
import PropTypes from 'prop-types'
import { calculateStops } from '../../calculations'

import './starshipinfo.css'

const StarshipInfo = (props) => {
  const { consumables, distance, MGLT, model, name } = props;
  const amountStop = calculateStops(distance, MGLT, consumables);
  return (
    <div className="starship-info">
      <h2>{name}</h2>
      <p>Model: {model}</p>
      <p>Consumables: {consumables}</p>
      <p>MGLT: {MGLT}</p>
      {
        distance > 0 &&
        <>
        {
          !Number.isNaN(amountStop)
            ? <p className="travel-info">Amount of stops to travel {distance} mega lights: {amountStop}</p>
            : <p className="travel-info">Unknown amount of stops</p>
        }
        </>
      }
    </div>
  )
}

StarshipInfo.proTypes = {
  distance: PropTypes.number,
  consumables: PropTypes.string,
  MGLT: PropTypes.number,
  model: PropTypes.string,
  name: PropTypes.string
}

StarshipInfo.defaultProps = {
  distance: 0
}

export default StarshipInfo