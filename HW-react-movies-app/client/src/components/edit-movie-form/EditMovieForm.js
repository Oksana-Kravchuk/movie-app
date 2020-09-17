import React from 'react';
import { Form, Input, Button, DatePicker, Row } from 'antd';
import PropTypes from 'prop-types';
import MultiSelect from '../multi-select';
import './EditMovieForm.scss';

const EditMovieForm = ({ movie }) => {
  const {
    id,
    title,
    release_date: date,
    poster_path: url,
    genres,
    overview,
    runtime,
  } = movie;
  return (
    <Form preserve={false} layout="vertical" className="edit-movie-form">
      <Form.Item label="Movie ID">
        <span className="edit-movie-form__movie-id">{id}</span>
      </Form.Item>
      <Form.Item label="Title">
        <Input defaultValue={title} />
      </Form.Item>
      <Form.Item label="Release date">
        <DatePicker size="large" placeholder={date} />
      </Form.Item>
      <Form.Item label="Movie url">
        <Input defaultValue={url} />
      </Form.Item>
      <Form.Item label="Genre">
        <MultiSelect defaultValue={genres} className="add-movie-form__select" />
      </Form.Item>
      <Form.Item label="Overview">
        <Input defaultValue={overview} />
      </Form.Item>
      <Form.Item label="RunTime">
        <Input defaultValue={runtime} />
      </Form.Item>
      <Row justify="end">
        <Button htmlType="reset" className="reset-btn">
          Reset
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Row>
    </Form>
  );
};

EditMovieForm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
};

export default EditMovieForm;
