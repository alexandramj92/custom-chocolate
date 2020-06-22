import React from 'react';
import './PreviewMessage.scss';
import DraggableDiv from '../UI/DraggableDiv/DraggableDiv';


const previewMessage = props => {

    
    
    console.log(props.messageColor)
    const messageColor = props.messageColor;
    const fontSize = props.fontSize;
    const fontFamily = 'font' + props.messageFont;
    console.log(fontFamily);


        return (

            <DraggableDiv> <p className={fontFamily} id="messagePrev" style={{color: messageColor, fontSize: fontSize }}> {props.previewMessage} </p> </DraggableDiv>
    
        );



    
    
}

export default previewMessage;