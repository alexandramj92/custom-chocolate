import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

export default props => 
  <div className='buttons fadein'>
    <div className='button'>
      <label htmlFor='single'>
        <FontAwesomeIcon icon={faImage} color='black' size='2x' />
      </label>
      <input type='file' id='single' onChange={props.onChange} /> 
    </div>
    
  </div>