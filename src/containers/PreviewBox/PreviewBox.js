import React from 'react';
import PreviewLogo from '../../components/PreviewLogo/PreviewLogo';
import './PreviewBox.scss';
 
const previewBox = props => {
 
  return (
    <div className='previewBox'>
    <PreviewLogo previewLogo={props.logoSelected} />
    </div>

  )
  
}
 
export default previewBox;