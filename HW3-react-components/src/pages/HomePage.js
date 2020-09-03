import React from 'react';
import MovieListContainer from '../containers/movie-list-container';
import Logo from '../components/logo';
import { Layout, Row } from 'antd';
import MoviesManagerBar from '../containers/movies-manager-bar/movies-manager-bar';
import AddMovieContainer from '../containers/add-movie-container';
import SearchPanel from '../components/search-panel';

const { Content, Footer, Header } = Layout;

const HomePage = () => {
  return (
      <>
        <Header className="header">
          <Row align="middle" justify="space-between">
            <Logo />
            <AddMovieContainer />
          </Row>
          <SearchPanel />
        </Header>
        <Content className="main">
          <div className="container">
            <MoviesManagerBar />
            <MovieListContainer />
          </div>  
        </Content>
        <Footer className="footer">
          <Logo />
        </Footer>
      </>
  );
};

export default HomePage;