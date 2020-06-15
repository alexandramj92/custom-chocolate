import React from 'react';
import PreviewLogo from '../../components/PreviewLogo/PreviewLogo';
import PreviewMessage from '../../components/PreviewMessage/PreviewMessage';
import './PreviewBox.scss';
 
const previewBox = props => {

  const wrapperDesign = props.wrapperDesignSelected;
 
  return (
    <div className="box previewBox" style={{ backgroundImage: 'url(' + wrapperDesign + ')'}}>
    <div className="previewDiv">
    <PreviewLogo previewLogo={props.logoSelected} />
    <PreviewMessage 
    previewMessage={props.messageSelected}
    fontSize={props.messageFontSizeSelected}
    messageColor = {props.messageColorSelected}
     />
    </div>
    </div>

  )
  
}
 
export default previewBox;