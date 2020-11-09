import React from 'react';
import Header from './Header';
import SearchPanelContainer from '../containers/search-panel-container';
import AddMovieContainer from '../containers/add-movie-container';

const HomePageHeader = () => {
  return (
    <Header>
      <AddMovieContainer />
      <SearchPanelContainer />
    </Header>
  );
};

export default HomePageHeader;
