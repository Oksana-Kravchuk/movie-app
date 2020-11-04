import React from 'react';

import Logo from '../logo';
import SearchPanelContainer from '../../containers/search-panel-container';
import AddMovieContainer from '../../containers/add-movie-container';

const HomePageHeader = () => {
  return (
    <section className="top-section">
      <div className="container">
        <div className="top-section__row">
          <Logo />
          <AddMovieContainer />
        </div>
        <SearchPanelContainer />
      </div>
    </section>
  );
};

export default HomePageHeader;
