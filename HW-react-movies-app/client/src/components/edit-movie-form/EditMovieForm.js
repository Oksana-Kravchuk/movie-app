import React from 'react';
import { DatePicker } from 'antd';
import { Form, Formik } from 'formik';
import moment from 'moment';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { updateMovie } from '../../actions';
import MovieFormValidation from '../../utils/form-validation';
import MultiSelect from '../multi-select';
import FormField from '../form-field';

const EditMovieForm = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector(
    (state) => ({
      movie: state.movie.movieForEditing,
    }),
    shallowEqual,
  );
  return (
    <Formik
      initialValues={{
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
        genres: movie.genres || [],
        runtime: movie.runtime,
      }}
      validationSchema={MovieFormValidation}
      onSubmit={(values, actions) => {
        dispatch(updateMovie(values));
        actions.resetForm();
      }}
      enableReinitialize
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
          <div className="form__row">
            <span id="id">{values.id}</span>
            <label htmlFor="id" className="form__label">
              Movie ID
            </label>
          </div>
          <FormField name="title" type="text" label="First Tile" />
          <div className="form__row">
            {errors.release_date && touched.release_date ? (
              <div className="form__error">{errors.release_date}</div>
            ) : null}
            <label className="form__label">
              Release date
              <DatePicker
                defaultValue={moment(values.release_date)}
                name="release_date"
                onChange={(_, dateString) =>
                  setFieldValue('release_date', dateString)
                }
              />
            </label>
          </div>
          <FormField name="poster_path" type="text" label="Movie url" />
          <div className="form__row">
            {errors.genres && touched.genres ? (
              <div className="form__error">{errors.genres}</div>
            ) : null}
            <label className="form__label">
              Genre
              <MultiSelect
                defaultValue={values.genres}
                name="genres"
                onBlur={() => setFieldTouched('genres', true)}
                onChange={(option) => setFieldValue('genres', option)}
              />
            </label>
          </div>
          <FormField name="overview" type="text" label="Overview" />
          <FormField name="runtime" type="number" label="RunTime" />
          <div className="form__buttons">
            <button
              onClick={resetForm}
              className="form__button form__button--reset"
              type="button"
            >
              Reset
            </button>
            <button type="submit" className="form__button">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditMovieForm;
