import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import MovieDetail from './MovieDetail';

export default {
  title: 'Filtering',
  component: MovieDetail,
  decorators: [withKnobs],
};

const defaultValues = {
  poster_path:
    'https://upload.wikimedia.org/wikipedia/ru/thumb/9/95/La_La_Land_Soundtrack.jpeg/900px-La_La_Land_Soundtrack.jpeg',
  title: 'Movie',
  genre: ['Comedy', 'Drama'],
  release_date: '12/12/20',
  vote_average: 8.1,
  runtime: 20,
  overview: 'Overview',
};

export const Movie = () => {
  return <MovieDetail movie={object('Detail', defaultValues)} />;
};
