import React, {useState} from 'react';
import PreviewBox from '../PreviewBox/PreviewBox';
import './ChocolateBarCustomizer.scss';

import Logo1 from '../../assets/logos/march_logo.png';
import Logo2 from '../../assets/logos/sorbet_logo.png';





const ChocolateBarCustomizer = () => {

const [logoSelection, setLogoSelection] = useState(Logo1);


return (

    <div className='chocolatebarcustomizer'>
    <h1>This is a test!</h1>
        <PreviewBox logoSelected={logoSelection} />
    </div>
)



}

export default ChocolateBarCustomizer;

