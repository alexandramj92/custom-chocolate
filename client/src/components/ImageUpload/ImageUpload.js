import React from 'react';

import './ImageUpload.scss';

const ImageUpload = (props) => {

 
    return (
        <div className='imageUpload'>
        <p>Upload your design</p>
        {props.content}
        </div>
    )
}

export default ImageUpload;

