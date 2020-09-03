import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import MovieListItem from '../movie-list-item';

const MovieList = ({ movies, showEditMovieModal, showDeleteMovieModal }) => {
  return (
    <Row gutter={[{ xs: 16, md: 50}, 32]}>
      {
        movies.map((movie) => {
          return (
            <Col sm={12} md={8} key={movie.id}>
                <MovieListItem movie={movie}
                               showDeleteMovieModal={showDeleteMovieModal}
                               showEditMovieModal={showEditMovieModal}/>
            </Col>
          );
        })
      }
    </Row>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEditMovieModal: PropTypes.func.isRequired,
  showDeleteMovieModal: PropTypes.func.isRequired
};

export default MovieList;