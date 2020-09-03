import React, { Component } from 'react';
import MovieList from '../../components/movie-list';
import ResultCount from '../../components/result-count'
import apiUrl from './api';

import { Spin } from 'antd';

class MovieListContainer extends Component {

  state = {
    movies: [],
    isLoading: true 
  };

  componentDidMount() {
    apiUrl.getMovies()
      .then(movies => this.setState({ movies: movies, isLoading: false}))
  }

  render() {
    if (this.state.isLoading) {
        return <Spin />;
    }
    return (
      <>
        <ResultCount amount= { this.state.movies.length }/>
        <MovieList movies = { this.state.movies }/>
      </>
    )
  }
}

export default MovieListContainer;