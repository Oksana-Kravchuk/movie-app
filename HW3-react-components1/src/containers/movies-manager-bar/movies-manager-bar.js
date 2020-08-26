import React from 'react';
import Filtering from '../../components/filtering/filtering';
import { Row } from 'antd';
import Sorting from '../../components/sorting/sorting';

const MoviesManagerBar = () => {
  return (
    <Row justify="space-between">
      <Filtering />
      <Sorting />
    </Row>
  );
};

export default MoviesManagerBar;