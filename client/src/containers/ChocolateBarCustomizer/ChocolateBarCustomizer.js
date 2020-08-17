import React, { useState, useEffect } from 'react';
import PreviewBox from '../PreviewBox/PreviewBox';
import FormContainer from '../FormContainer/FormContainer';
import ContactForm from '../../components/ContactForm/ContactForm';
import domtoimage from 'dom-to-image';
import './ChocolateBarCustomizer.scss';
import MarchLogo from '../../assets/logos/march_logo.png';
import SorbetLogo from '../../assets/logos/sorbet_logo.png';
import patternOne from '../../assets/wrapperImages/patternOne.jpg';
import patternTwo from '../../assets/wrapperImages/patternTwo.jpg';
import patternThree from '../../assets/wrapperImages/patternThree.jpg';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import Images from '../../components/Images/Images';
import ImageUploadButton from '../../components/UI/ImageUploadButton/ImageUploadButton';

import { API_URL } from '../../config';

const ChocolateBarCustomizer = () => {
  const [logoSelection, setLogoSelection] = useState();
  const [wrapperDesign, setWrapperDesign] = useState();
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [uploaded, setUploaded] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [selectionMade, setSelectionMade] = useState(false);
  const [submittingDes, setSubmittingDes] = useState(false);

  const [formData, setFormData] = useState({
    logo: '',
    artFileName: 'Template1',
    message: '',
    messageFont: null,
    messageSize: '14px',
    messageColor: '#0C527D',
    previewUrl: '',
    uploadedImgUrl: '',
    firstName: '',
    lastName: '',
    email: ''
  });

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setLogoState();
  }, [formData]);

  const setLogoState = () => {
    if (formData.logo === 'MarchLogo') {
      setSelectionMade(true);
      setLogoSelection(MarchLogo);
    } else if (formData.logo === 'SorbetLogo') {
      setSelectionMade(true);
      setLogoSelection(SorbetLogo);
    } else {
      setLogoSelection();
    }
  };

  const submitCancelHandler = () => {
    setSubmittingDes(false);
  }

  const setDesign = (eventValue) => {
    setSelectionMade(true);
    setUploaded(false);
    if (eventValue === 'noneSelected') {
      setWrapperDesign();
    } else if (eventValue === 'template1') {
      setWrapperDesign(patternOne);
    } else if (eventValue === 'template2') {
      setWrapperDesign(patternTwo);
    } else if (eventValue === 'template3') {
      setWrapperDesign(patternThree);
    }
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);

    const imageData = new FormData();

    files.forEach((file, i) => {
      imageData.append(i, file);
    });

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: imageData,
    })
      .then((res) => res.json())
      .then((images) => {
        setUploading(false);
        setUploaded(true);
        setSelectionMade(true);
        setImages(images);
        const url = images[0].url;
        setFormData({ ...formData, uploadedImgUrl: url, artFileName: '' });
      });
  };

  const convertPreviewToImage = () => {
    domtoimage
      .toBlob(document.getElementById('divHtml2Canvas'))
      .then(function (blob) {
        const prevData = new FormData();
        prevData.append('prevData', blob);

        console.log(prevData);

        fetch(`${API_URL}/image-upload`, {
          method: 'POST',
          body: prevData,
        })
          .then((res) => res.json())
          .then((prevImages) => {
            console.log(prevImages);
            const url = prevImages[0].url;
            setFormData({ ...formData, previewUrl: url });
          });
      });
  };

  const content = () => {
    switch (true) {
      case uploading:
        return <Spinner />;
      default:
        return <ImageUploadButton onChange={onChange} />;
    }
  };

  const handleChange = (event) => {
    if (event) {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      if (event.target.name === 'artFileName') {
        setDesign(event.target.value);
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
          uploadedImgUrl: '',
        });
      }
      console.log(event.target.value);
    } else {
      return;
    }
  };

  const selectColor = (event) => {
    if (event) {
      setFormData({ ...formData, messageColor: event.target.style.background });
      setSelectionMade(true);
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
     <Modal show={submittingDes} modalClosed={submitCancelHandler}>
          <ContactForm
            formData = {formData}
            setFormData = {setFormData}
            setSubmittingDes = {setSubmittingDes}
           />
      </Modal>

      <div className="grid-container">
        <div className="grid-item">
          <FormContainer
            content={content()}
            handleChange={(e) => handleChange(e)}
            selectColor={(e) => selectColor(e)}
            clearFormData={() => clearFormData()}
            convertPrevToUrl={() => convertPreviewToImage()}
            formData={formData}
            setFormData={setFormData}
            isComplete={isComplete}
            setIsComplete={setIsComplete}
            submittingDes={submittingDes}
            setSubmittingDes={setSubmittingDes}
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
            uploaded={uploaded}
            selectionMade={selectionMade}
          />
        </div>
      </div>
    </div>
  );
};

export default ChocolateBarCustomizer;
