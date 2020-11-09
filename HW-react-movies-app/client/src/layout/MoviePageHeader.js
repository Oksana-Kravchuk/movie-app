import React from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import SearchToggler from '../components/search-toggler';
import MovieDetailContainer from '../containers/movie-detail-container';

const MoviePageHeader = () => {
  const { id } = useParams();
  return (
    <Header>
      <SearchToggler />
      <MovieDetailContainer id={id}/>
    </Header>
  );
};

export default MoviePageHeader;
