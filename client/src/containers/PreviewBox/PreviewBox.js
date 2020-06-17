import React from 'react';
import PreviewLogo from '../../components/PreviewLogo/PreviewLogo';
import PreviewMessage from '../../components/PreviewMessage/PreviewMessage';
import './PreviewBox.scss';
 
const previewBox = props => {

  const wrapperDesign = props.wrapperDesignSelected;
  const userImage = props.images.map((image, i) => image.secure_url);
  console.log(userImage)

  const finalWrapper = () => {
    let finalWrapper;
    if(userImage.length>0) {
      finalWrapper = userImage
    } else {
      finalWrapper = wrapperDesign
    }

    return finalWrapper;
  }
 
  return (
   
    <div className="box previewBox" style={{ backgroundImage: 'url(' + finalWrapper() + ')'}}>
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