import React from 'react';
import './PreviewLogo.scss';
import DraggableDiv from '../UI/DraggableDiv/DraggableDiv';


const previewLogo = props => {

    
    
    console.log(props.previewLogo)


        return (

            // <div>This is a test!</div>
            // <DraggableDiv previewLogoInDiv = {props.previewLogo}> </DraggableDiv>
            <DraggableDiv> <img src={props.previewLogo}/> </DraggableDiv>

           
    
        );



    
    
}

export default previewLogo;