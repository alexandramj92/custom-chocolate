import React from 'react';
import PreviewLogo from '../../components/PreviewLogo/PreviewLogo';
import PreviewMessage from '../../components/PreviewMessage/PreviewMessage';
import './PreviewBox.scss';
 
const previewBox = props => {

  const wrapperDesign = props.wrapperDesignSelected;
  const userImage = props.images.map((image, i) => image.secure_url);
  const uploaded = props.uploaded;
  const selectionMade = props.selectionMade;
  let placeholder = <h1 id="placeholder"> Make your selections </h1>;
  if(selectionMade) {
    placeholder = "";
  }
  const finalWrapper = () => {
    let finalWrapper;
    if(uploaded) {
      finalWrapper = userImage
    } else if (!uploaded) {
      finalWrapper = wrapperDesign
    }

    return finalWrapper;
  }
 
  return (
   
    <div className="box previewBox" style={{ backgroundImage: 'url(' + finalWrapper() + ')'}}>
    <div className="previewDiv">
    {placeholder}
    <PreviewLogo previewLogo={props.logoSelected} />
    <PreviewMessage 
    previewMessage={props.messageSelected}
    fontSize={props.messageFontSizeSelected}
    messageColor = {props.messageColorSelected}
    messageFont={props.messageFontSelected}
     />
    </div>
    </div>

  )
  
}
 
export default previewBox;