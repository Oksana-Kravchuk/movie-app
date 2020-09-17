import React from 'react';
import Logo from '../components/logo';
import SearchPanel from '../components/search-panel';
import AddMovieContainer from '../containers/add-movie-container';

const HomePage = () => {
  return (
    <section className="top-section">
      <div className="container">
        <div className="top-section__row">
          <Logo />
          <AddMovieContainer />
        </div>
        <SearchPanel />
      </div>
    </section>
  );
};

export default HomePage;
