import React from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
import MarchLogo from '../../assets/logos/march_logo.png';
import SorbetLogo from '../../assets/logos/sorbet_logo.png';
import Button from '../UI/Button/Button';
import ColorPalette from '../ColorPalette/ColorPalette';
import './CustomForm.scss';

const CustomForm = ({
  content,
  handleSubmit,
  handleChange,
  selectColor,
  clearFormData,
  formData,
  setFormData,
}) => {
  const formSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
    console.log(formData);
  };

  const formChange = (event) => {
    handleChange(event);
  };

  const formColor = (event) => {
    selectColor(event);
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
            onClick={clearFormData}
            type="reset"
          />
          <Button className={'primary'} text={'Finish'} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
