import React from 'react';
import Header from '../components/header';
import MovieListContainer from '../containers/movie-list-container';
import Logo from '../components/logo';
import { Layout } from 'antd';
import MoviesManagerBar from '../containers/movies-manager-bar/movies-manager-bar';
const { Content, Footer } = Layout;

const HomePage = () => {
  return (
      <>
        <Header />
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