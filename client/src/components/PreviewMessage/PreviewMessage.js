import React from 'react';
import './PreviewMessage.scss';
import DraggableDiv from '../UI/DraggableDiv/DraggableDiv';


const previewMessage = props => {

    
    
    console.log(props.messageColor)
    const messageColor = props.messageColor;
    const fontSize = props.fontSize;


        return (

            <DraggableDiv> <p style={{color: messageColor, fontSize: fontSize }}> {props.previewMessage} </p> </DraggableDiv>
    
        );



    
    
}

export default previewMessage;