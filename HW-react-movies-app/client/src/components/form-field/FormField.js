import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form__row">
      {meta.touched && meta.error ? (
        <div className="form__error">{meta.error}</div>
      ) : null}
      <label className="form__label">
        {label}
        <input {...field} {...props} className="form__input" />
      </label>
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
};

export default FormField;
