import React from 'react';
import { Row } from 'antd';
import Filtering from '../../components/filtering/Filtering';
import Sorting from '../../components/sorting/Sorting';

const MoviesManagerBar = () => {
  return (
    <Row justify="space-between">
      <Filtering />
      <Sorting />
    </Row>
  );
};

export default MoviesManagerBar;
