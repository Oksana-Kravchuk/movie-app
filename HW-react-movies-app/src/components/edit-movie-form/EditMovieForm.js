import React from 'react';
import { 
        Form,
        Input,
        Button,
        DatePicker,
        Row } from 'antd';
import MultiSelect from '../multi-select';
import PropTypes from 'prop-types';
import './EditMovieForm.scss';

const EditMovieForm = ({ movie }) => {
  const { id, title, date, url, genre, overview, runTime } = movie;
  return (
    <Form preserve={false} layout="vertical" className="edit-movie-form">
      <Form.Item label="Movie ID">
        <span className="edit-movie-form__movie-id">{id}</span>
      </Form.Item>
      <Form.Item label="Title">
        <Input defaultValue	={title} />
      </Form.Item>
      <Form.Item label="Release date">
        <DatePicker size="large" placeholder={date} />
      </Form.Item>
      <Form.Item label="Movie url">
        <Input defaultValue={url} />
      </Form.Item>
      <Form.Item label="Genre">
        <MultiSelect defaultValue={genre}
                className="add-movie-form__select">   
        </MultiSelect>
      </Form.Item>
      <Form.Item label="Overview">
        <Input defaultValue={overview} />
      </Form.Item>
      <Form.Item label="RunTime">
        <Input defaultValue={runTime}/>
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
    genre: PropTypes.string,
    date: PropTypes.number,
    url: PropTypes.string,
    overview: PropTypes.string,
    runTime: PropTypes.string
  }),
};

export default EditMovieForm;