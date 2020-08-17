import React from 'react';
import CustomForm from '../../components/CustomForm/CustomForm';
import './FormContainer.scss';

const FormContainer = ({
  content,
  handleChange,
  selectColor,
  clearFormData,
  convertPrevToUrl,
  formData,
  setFormData,
  isComplete,
  setIsComplete,
  submittingDes,
  setSubmittingDes
}) => {
  return (
    <div className="form-container">
      <CustomForm
        content={content}
        handleChange={handleChange}
        selectColor={selectColor}
        clearFormData={clearFormData}
        convertPrevToUrl={convertPrevToUrl}
        formData={formData}
        setFormData={setFormData}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        submittingDes={submittingDes}
        setSubmittingDes={setSubmittingDes}
      />
    </div>
  );
};

export default FormContainer;
