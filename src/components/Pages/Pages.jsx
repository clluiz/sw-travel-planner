import React from 'react'
import Proptypes from 'prop-types'
import Button from '../Button/Button';

const Pages = (props) => {
  const { next, previous } = props;
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '500px',
      padding: '10px'
    }}>
      {
          <Button 
            onClick={previous}
            label="<"
            visible={!!previous}
          />
      }
      {
          <Button 
            onClick={next}
            label=">"
            visible={!!next}
          />
      }
    </div>
  )
}

Pages.propTypes = {
  next: Proptypes.func,
  previous: Proptypes.func
}

export default Pages;