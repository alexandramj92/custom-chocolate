import React from 'react';
import Button from '../UI/Button/Button';
import emailjs from 'emailjs-com';
import { navigate } from '@reach/router';


import './ContactForm.scss';

const ContactForm =({
    formData,
    setFormData,
    setSubmittingDes
}) => {
    const formSubmit = (event) => {
        event.preventDefault();
        if (formData.firstName !== '' || formData.lastName !== '' || formData.email !== '') {
          const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: template,
            REACT_APP_EMAILJS_USERID: user,
          } = process.env;
    
        
          sendForm(template, receiverEmail, formData, user);
    
          console.log('Success');
        } else {
          console.log('Contact information is missing');
        }
      };
      const handleClear = () => {
        setSubmittingDes(false);
        setFormData({
          ...formData,
          firstName: '',
          lastName: '',
          email: ''
        });
      };
    
      // Note: this is using default_service, which will map to whatever
      // default email provider you've set in your EmailJS account.
      const sendForm = (template, receiverEmail, formData, user) => {
        emailjs
          .send(
            'default_service',
            template,
            {
              receiverEmail,
              formData,
            },
            user
          )
          .then((res) => {
            console.log('email sent');
            navigate('/success');
          })
          // Handle errors here however you like
          .catch((err) => console.error('Failed to send feedback. Error: ', err));
      };


    const handleChange = (event) => {
        if (event) {
          setFormData({ ...formData, [event.target.name]: event.target.value });
          if (event.target.name === 'firstName' || event.target.name === 'lastName' || event.target.name === 'email') {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            });
          }
          console.log(event.target.value);
        } else {
          return;
        }
      };
    return(
        <div className="contact-custom-form">
      <h2 className="contact-form-header">Contact Information</h2>
      <form name="customization-form" method="post" onSubmit={formSubmit}>

        <div className="contact-form-content">

          <div className="contact-form-name">
            <p>First Name:</p>
            <input name="firstName" onChange={handleChange}></input>
          </div>

          <div className="contact-form-name">
          <p>Last Name:</p>
          <input name="lastName" onChange={handleChange}></input>
          </div>

          <div className="contact-form-name">
          <p>Email:</p>
          <input name="email" onChange={handleChange}></input>
          </div>

        </div>
        <div className="buttons">
          <Button
            className={'secondary'}
            text={'Cancel'}
            type={'reset'}
            onClick={handleClear}
          />
          <Button className={'primary'} text={'Submit'} type="submit" />{' '}
        </div>
      </form>
    </div>

    );
};

export default ContactForm;

