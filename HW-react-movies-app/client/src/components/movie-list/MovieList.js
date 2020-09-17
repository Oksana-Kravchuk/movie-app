import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import MovieListItem from '../movie-list-item';

const MovieList = ({ movies, showEditMovieModal, showDeleteMovieModal }) => {
  return (
    <Row gutter={[{ xs: 16, sm: 24, md: 45 }, 32]}>
      {movies.map((movie) => {
        return (
          <Col sm={12} md={8} key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <MovieListItem
                movie={movie}
                showDeleteMovieModal={showDeleteMovieModal}
                showEditMovieModal={showEditMovieModal}
              />
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  showEditMovieModal: PropTypes.func.isRequired,
  showDeleteMovieModal: PropTypes.func.isRequired,
};

export default MovieList;
