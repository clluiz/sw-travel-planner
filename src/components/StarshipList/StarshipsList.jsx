import React from 'react'
import PropTypes from 'prop-types'
import StarshipInfo from '../StarshipInfo/StarhipInfo'

import './starshiplist.css'

const StarshipList = (props) => {
  const { distance, starships } = props 
  return (
    <ul className="starship-list">
    {
      starships.map((starship,index) => 
        <li key={`starship-${index}`}>
          <StarshipInfo distance={distance} {...starship} />
        </li>)
    }
  </ul>
  )
}

StarshipList.propTypes = {
  distance: PropTypes.number,
  starships: PropTypes.arrayOf(PropTypes.object)
}

StarshipList.defaultProps = {
  distance: 0,
  starships: []
}


export default StarshipList