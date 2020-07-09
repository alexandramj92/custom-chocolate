import React, { useState, useEffect } from 'react';
import PreviewBox from '../PreviewBox/PreviewBox';
import FormContainer from '../FormContainer/FormContainer';
import domtoimage from 'dom-to-image';


import './ChocolateBarCustomizer.scss';

import MarchLogo from '../../assets/logos/march_logo.png';
import SorbetLogo from '../../assets/logos/sorbet_logo.png';
import patternFour from '../../assets/wrapperImages/patternFour.jpg';
import patternOne from '../../assets/wrapperImages/patternOne.jpg';
import patternTwo from '../../assets/wrapperImages/patternTwo.png';
import patternThree from '../../assets/wrapperImages/patternThree.jpg';

// import patternTwo from '../../assets/wrapperImages/patternTwo.jpg';
// import patternThree from '../../assets/wrapperImages/patternThree.jpg';

import ImageUpload from '../../components/ImageUpload/ImageUpload';

import Spinner from '../../components/UI/Spinner/Spinner';
import Images from '../../components/Images/Images';
import ImageUploadButton from '../../components/UI/ImageUploadButton/ImageUploadButton';

import { API_URL } from '../../config';

const ChocolateBarCustomizer = () => {
  const [logoSelection, setLogoSelection] = useState();
  const [wrapperDesign, setWrapperDesign] = useState(patternOne);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);


  const [formData, setFormData] = useState({
    logo: 'SorbetLogo',
    artFileName: 'Template1',
    message: '',
    messageFont: null,
    messageSize: '14px',
    messageColor: '#0C527D',
    previewUrl: '',
    uploadedImgUrl: ''
  });

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setLogoState();
    setDesign();
  }, [formData]);

  const setLogoState = () => {
    if (formData.logo === 'MarchLogo') {
      setLogoSelection(MarchLogo);
    } else {
      setLogoSelection(SorbetLogo);
    }
  };

  const setDesign = () => {
    if (formData.artFileName === 'template1') {
      setImages([]);
      setWrapperDesign(patternOne);
    } else if (formData.artFileName === 'template2') {
      setImages([]);
      setWrapperDesign(patternTwo);
    } else if (formData.artFileName === 'template3') {
      setImages([]);
      setWrapperDesign(patternThree);
    } else if (formData.artFileName === 'template4') {
      setImages([]);
      setWrapperDesign(patternFour);
    }
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);
    // this.setState({ uploading: true })
    setUploading(true);

    const imageData = new FormData();

    files.forEach((file, i) => {
      imageData.append(i, file);
    });

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: imageData,
    })
      // .then(res => console.log(res))
      .then((res) => res.json())
      .then((images) => {
        setUploading(false);
        setImages(images);
        const url = images[0].url;
        setFormData({...formData, uploadedImgUrl: url });
      });
  };

  const convertPreviewToImage = () => {
    domtoimage.toBlob(document.getElementById('divHtml2Canvas'))
    .then(function (blob) {
      const prevData = new FormData();
      prevData.append("prevData", blob)

    
      console.log(prevData);


      fetch(`${API_URL}/image-upload`, {
        method: 'POST',
        body: prevData,
      })
     
        .then((res) => res.json())
        .then((prevImages) => {
          console.log(prevImages);
          const url = prevImages[0].url;
          setFormData({...formData, previewUrl:url});
        });
       
    });
    
  }


  const content = () => {
    switch (true) {
      case uploading:
        return <Spinner />;
      //   case images.length > 0:
      //     return <Images images={images} removeImage={removeImage} />
      default:
        return <ImageUploadButton onChange={onChange} />;
    }
  };

  //   console.log(images.map((image, i) => console.log(image.secure_url)))

  const handleChange = (event) => {
    if (event) {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      console.log(event.target.value);
    } else {
      return;
    }
  };

  const selectColor = (event) => {
    if (event) {
      setFormData({ ...formData, messageColor: event.target.style.background });
    } else {
      return;
    }
  };

  const clearFormData = () => {
    setFormData({
      logo: 'SorbetLogo',
      artFileName: '',
      message: '',
      messageFont: null,
      messageSize: '14px',
      messageColor: '#0C527D',
    });
  };

  return (
    <div className="chocolatebarcustomizer">
      {/* <ImageUpload content={content()} /> */}

      <div className="grid-container">
        <div className="grid-item">
          <FormContainer
            content={content()}
            handleChange={(e) => handleChange(e)}
            selectColor={(e) => selectColor(e)}
            clearFormData={() => clearFormData()}
            convertPrevToUrl={()=> convertPreviewToImage()}
            formData={formData}
            setFormData={setFormData}
            isComplete={isComplete}
            setIsComplete={setIsComplete}
          />
        </div>
        <div className="grid-item" id="divHtml2Canvas">
          <PreviewBox
            logoSelected={logoSelection}
            images={images}
            messageSelected={formData.message}
            messageColorSelected={formData.messageColor}
            messageFontSizeSelected={formData.messageSize}
            wrapperDesignSelected={wrapperDesign}
            messageFontSelected={formData.messageFont}
          />
        </div>
      </div>
    </div>
  );
};

export default ChocolateBarCustomizer;
