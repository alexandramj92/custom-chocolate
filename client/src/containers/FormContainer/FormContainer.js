import React from 'react';
import CustomForm from '../../components/CustomForm/CustomForm';
import './FormContainer.scss';

const FormContainer = ({
  content,
  handleChange,
  selectColor,
  clearFormData,
  formData,
  setFormData,
  isComplete,
  setIsComplete,
}) => {
  return (
    <div className="form-container">
      <CustomForm
        content={content}
        handleChange={handleChange}
        selectColor={selectColor}
        clearFormData={clearFormData}
        formData={formData}
        setFormData={setFormData}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
      />
    </div>
  );
};

export default FormContainer;
