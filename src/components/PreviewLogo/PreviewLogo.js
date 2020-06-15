import React from 'react';
import './PreviewLogo.scss';
import DraggableDiv from '../UI/DraggableDiv/DraggableDiv';


const previewLogo = props => {

    
    
    console.log(props.previewLogo)


        return (

            
            <DraggableDiv> <img style={{ height: '50px' }} src={props.previewLogo}/> </DraggableDiv>
    
        );



    
    
}

export default previewLogo;