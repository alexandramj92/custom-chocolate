import React from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
import MarchLogo from '../../assets/logos/march_logo.png';
import SorbetLogo from '../../assets/logos/sorbet_logo.png';
import Button from '../UI/Button/Button';
import ColorPalette from '../ColorPalette/ColorPalette';
import emailjs from 'emailjs-com';
import { navigate } from '@reach/router';
import './CustomForm.scss';

const CustomForm = ({
  content,
  handleChange,
  selectColor,
  clearFormData,
  formData,
  setFormData,
  isComplete,
  setIsComplete
}) => {

  const formSubmit = (event) => {
    event.preventDefault();
    if (formData.artFileName !== '' && formData.message !== '') {
      const {
        REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        REACT_APP_EMAILJS_TEMPLATEID: template,
        REACT_APP_EMAILJS_USERID: user
      } = process.env

      setIsComplete(true);


      sendForm(
        template,
        receiverEmail,
        formData,
        user
      )

      
      console.log('Success');
    } else {
      console.log('Form is missing data');
    }
  };

  // Note: this is using default_service, which will map to whatever
 // default email provider you've set in your EmailJS account.
 const sendForm = (template, receiverEmail, formData, user) => {
  emailjs
    .send('default_service', template, {
        receiverEmail,
        formData
      },
      user
    )
    .then(res => {
      console.log("email sent");
      navigate('/success');

    })
    // Handle errors here however you like
    .catch(err => console.error('Failed to send feedback. Error: ', err));
}


  const formChange = (event) => {
    handleChange(event);
  };

  const formColor = (event) => {
    selectColor(event);
  };

  const handleClear = () => {
    clearFormData();
  };

  return (
    <div className="custom-form">
      <h2 className="form-header">Customize</h2>
      <form name="customization-form" method="post" onSubmit={formSubmit}>
        <div className="form-logo-option">
          <h4>Logo</h4>
          <div className="form-check-option">
            <input
              type="radio"
              name="logo"
              value="MarchLogo"
              className="form-logo-input"
              onChange={formChange}
            />
            <img src={MarchLogo} alt="March-Logo" className="form-logo-img" />
          </div>
          <div className="form-check-option">
            <input
              type="radio"
              name="logo"
              value="SorbetLogo"
              className="form-logo-input"
              onChange={formChange}
            />
            <img src={SorbetLogo} alt="Sorbet-Logo" className="form-logo-img" />
          </div>
        </div>
        <div className="form-wrapper-art-option">
          <h4>Wrapper Art</h4>
          <ImageUpload content={content} />
          <div className="form-art-templates">
            <p>Choose existing design</p>
            <select
              className="form-art-selection"
              name="artFileName"
              onChange={formChange}
            >
              <option value="template1" className="form-art-option">
                Template 1
              </option>
              <option value="template2" className="form-art-option">
                Template 2
              </option>
              <option value="template3" className="form-art-option">
                Template 3
              </option>
              <option value="template4" className="form-art-option">
                Template 4
              </option>
            </select>
          </div>
        </div>
        <div className="form-message-option">
          <h4>Personal Message</h4>
          <div className="form-text-option">
            <p>Enter your message:</p>
            <textarea name="message" onChange={formChange}></textarea>
          </div>
          <div className="form-text-size-option"></div>
          <p>Choose font:</p>
          <select
            className="form-text-font-selection"
            name="messageFont"
            onChange={formChange}
          >
            <option value="March">March</option>
            <option value="Bon-Vivant">Bon Vivant</option>
            <option value="Rodetta">Rodetta</option>
          </select>
          <select
            className="form-text-size-selection"
            name="messageSize"
            onChange={formChange}
          >
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="22px">22px</option>
            <option value="26px">26px</option>
            <option value="30px">30px</option>
          </select>
          <p>Choose color:</p>
          <div className="color-palettes">
            <ColorPalette
              selectColor={formColor}
              color={ColorPalette.hexCode}
            />
          </div>
        </div>
        <div className="buttons">
          <Button
            className={'secondary'}
            text={'Cancel'}
            type={'reset'}
            onClick={handleClear}
          />
          <Button className={'primary'} text={'Finish'} type="submit" />{' '}
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
