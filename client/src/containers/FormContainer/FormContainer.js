import React from 'react';
import CustomForm from '../../components/CustomForm/CustomForm';
import './FormContainer.scss';

const FormContainer = ({
  content,
  handleSubmit,
  handleChange,
  selectColor,
  clearFormData,
  formData,
  setFormData,
}) => {
  return (
    <div className="form-container">
      <CustomForm
        content={content}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        selectColor={selectColor}
        clearFormData={clearFormData}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default FormContainer;
