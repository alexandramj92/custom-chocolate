import React, {useState} from 'react';
import PreviewBox from '../PreviewBox/PreviewBox';
import FormContainer from '../FormContainer';

import './ChocolateBarCustomizer.scss';

import Logo1 from '../../assets/logos/march_logo.png';
import Logo2 from '../../assets/logos/sorbet_logo.png';
import testImage from '../../assets/wrapperImages/testimage.jpg';




const ChocolateBarCustomizer = () => {

const [logoSelection, setLogoSelection] = useState(Logo1);
const [message, setMessage] = useState('Happy Birtday Jessica! Hope you have a wonderful day.');
const [messageFontSize, setMessageFontSize] = useState('30px');
const [messageColor, setMessageColor] = useState('#0C527D');
const [wrapperDesign, setWrapperDesign] = useState(testImage);


return (

    <div className='chocolatebarcustomizer'>
        <div className='grid-container'>
        <div className='grid-item'>
        <FormContainer/>
        </div>
        <div className='grid-item'>
        <PreviewBox 
        logoSelected={logoSelection} 
        messageSelected={message} 
        messageColorSelected={messageColor}
        messageFontSizeSelected={messageFontSize}
        wrapperDesignSelected = {wrapperDesign}
         />
         </div>

         </div>
    </div>
)



}

export default ChocolateBarCustomizer;

