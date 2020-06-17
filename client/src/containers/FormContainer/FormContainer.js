import React from 'react';
import CustomForm from '../../components/CustomForm/CustomForm';
import './FormContainer.scss';

const FormContainer = (props) => {
  return (
    <div className="form-container">
      <CustomForm content={props.content} />
    </div>
  );
};

export default FormContainer;
