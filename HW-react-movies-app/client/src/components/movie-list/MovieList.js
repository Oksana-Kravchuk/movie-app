import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Modal } from 'antd';
import PropTypes from 'prop-types';

import ResultCount from '../result-count';
import EditMovieForm from '../edit-movie-form';
import DeleteMovieDialog from '../delete-movie-dialog';
import MovieListItem from '../movie-list-item';

const MovieList = ({
  movies,
  isDeleteMovieModalVisible,
  toggleDeleteModalVisibility,
  isEditMovieModalVisible,
  toggleEditModalVisibility,
}) => {
  return (
    <>
      <ResultCount amount={movies.length} />
      <Modal
        visible={isEditMovieModalVisible}
        onCancel={toggleEditModalVisibility}
        footer={null}
        title="Edit Movie"
        className="movie-modal"
      >
        <EditMovieForm />
      </Modal>
      <Modal
        visible={isDeleteMovieModalVisible}
        onCancel={toggleDeleteModalVisibility}
        footer={null}
        title="Delete Movie"
        className="movie-modal"
      >
        <DeleteMovieDialog />
      </Modal>
      <Row gutter={[{ xs: 16, sm: 24, md: 45 }, 32]}>
        {movies.map((movie) => {
          return (
            <Col sm={12} md={8} key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <MovieListItem movie={movie} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  isEditMovieModalVisible: PropTypes.bool,
  isDeleteMovieModalVisible: PropTypes.bool,
  toggleEditModalVisibility: PropTypes.func.isRequired,
  toggleDeleteModalVisibility: PropTypes.func.isRequired,
};

export default MovieList;
