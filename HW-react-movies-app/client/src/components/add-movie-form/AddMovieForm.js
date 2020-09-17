import React from 'react';
import { Form, Input, Button, DatePicker, Row } from 'antd';
import MultiSelect from '../multi-select';

import './AddMovieForm.scss';

const AddMovieForm = () => {
  return (
    <Form preserve={false} layout="vertical" className="add-movie-form">
      <Form.Item label="Title">
        <Input placeholder="Movie title here" />
      </Form.Item>
      <Form.Item label="Release date">
        <DatePicker placeholder="Select Date" />
      </Form.Item>
      <Form.Item label="Movie url">
        <Input placeholder="Movie URL here" />
      </Form.Item>
      <Form.Item label="Genre">
        <MultiSelect
          placeholder="Select Genre"
          className="add-movie-form__select"
        />
      </Form.Item>
      <Form.Item label="Overview">
        <Input placeholder="Overview here" />
      </Form.Item>
      <Form.Item label="RunTime">
        <Input placeholder="RunTime here" />
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

export default AddMovieForm;
