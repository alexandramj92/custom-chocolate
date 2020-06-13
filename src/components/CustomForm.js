import React, { useState } from 'react';
import MarchLogo from '../assets/logos/march_logo.png';
import SorbetLogo from '../assets/logos/sorbet_logo.png';
import './CustomForm.scss';

const CustomForm = () => {
  const [formData, setFormData] = useState({
    logo: '',
    artFileName: '',
    message: '',
    messageFont: null,
    messageSize: '14px',
    messageColor: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log('Form Submitted!');
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="custom-form">
      <h2 className="form-header">Customize</h2>
      <form name="customization-form" method="post" onSubmit={handleSubmit}>
        <div className="form-logo-option">
          <h4>Logo</h4>
          <div className="form-check-option">
            <input
              type="radio"
              name="logo"
              value="march-logo"
              checked={true}
              className="form-logo-input"
              onChange={handleChange}
            />
            <img src={MarchLogo} alt="March-Logo" className="form-logo-img" />
          </div>
          <div className="form-check-option">
            <input
              type="radio"
              name="logo"
              value="sorbet-logo"
              className="form-logo-input"
              onChange={handleChange}
            />
            <img src={SorbetLogo} alt="Sorbet-Logo" className="form-logo-img" />
          </div>
        </div>
        <div className="form-wrapper-art-option">
          <h4>Wrapper Art</h4>
          <div className="form-art-templates">
            <select
              className="form-art-selection"
              name="artFileName"
              onChange={handleChange}
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
            <textarea name="message" onChange={handleChange}></textarea>
            <button>Update</button>
          </div>
          <div className="form-text-size-option"></div>
          <p>Choose font:</p>
          <select
            className="form-text-font-selection"
            name="messageFont"
            onChange={handleChange}
          >
            <option value="March">March</option>
            <option value="Bon-Vivant">Bon Vivant</option>
            <option value="Rodetta">Rodetta</option>
          </select>
          <select
            className="form-text-size-selection"
            name="messageSize"
            onChange={handleChange}
          >
            <option value="14px">14px</option>
            <option value="16px">14px</option>
            <option value="18px">14px</option>
          </select>
          <p>Choose color:</p>
          <div className="color-palettes"></div>
        </div>
        <button>Finish</button>
      </form>
    </div>
  );
};

export default CustomForm;
