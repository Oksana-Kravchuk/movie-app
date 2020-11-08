import React from 'react';
import { DatePicker } from 'antd';
import { Form, Formik } from 'formik';

import MultiSelect from '../multi-select';
import FormField from '../form-field';
import MovieFormValidation from '../../utils/form-validation';

const AddMovieForm = ({submitForm}) => {
  return (
    <Formik
      initialValues={{
        title: '',
        release_date: '',
        poster_path: '',
        overview: '',
        genres: [],
        runtime: '',
      }}
      validationSchema={MovieFormValidation}
      onSubmit={(values, actions) => {
        () => submitForm(values);
        actions.resetForm();
      }}
    >
      {({
        values,
        resetForm,
        setFieldValue,
        errors,
        touched,
        setFieldTouched,
      }) => (
        <Form className="form">
          <FormField
            id="title"
            name="title"
            type="text"
            label="First Tile"
            placeholder="Title"
            onChange={(val) => setFieldValue('title', val)}
          />
          <div className="form__row">
            {errors.release_date && touched.release_date ? (
              <div className="form__error">{errors.release_date}</div>
            ) : null}
            <label className="form__label">
              Release date
              <DatePicker
                defaultValue={values.release_date}
                name="release_date"
                placeholder="Select date"
                onBlur={() => setFieldTouched('release_date', true)}
                onChange={(_, dateString) =>
                  setFieldValue('release_date', dateString)
                }
              />
            </label>
          </div>
          <FormField
            name="poster_path"
            type="text"
            label="Movie url"
            placeholder="Movie url here"
          />
          <div className="form__row">
            {errors.genres && touched.genres ? (
              <div className="form__error">{errors.genres}</div>
            ) : null}
            <label className="form__label">
              Genre
              <MultiSelect
                defaultValue={values.genres}
                name="genres"
                placeholder="Select genre"
                onBlur={() => setFieldTouched('genres', true)}
                onChange={(option) => setFieldValue('genres', option)}
              />
            </label>
          </div>
          <FormField
            name="overview"
            type="text"
            label="Overview"
            placeholder="Overview here"
          />
          <FormField
            name="runtime"
            type="number"
            label="RunTime"
            placeholder="RunTime here"
          />
          <div className="form__buttons">
            <button
              onClick={resetForm}
              className="form__button button button--secondary"
              type="button"
            >
              Reset
            </button>
            <button type="submit" className="button button--primary">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddMovieForm;
