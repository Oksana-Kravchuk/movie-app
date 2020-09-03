import React from 'react';
import { Dropdown } from 'antd';
import PropTypes from 'prop-types';
import './MovieListItem.scss';
import { CloseOutlined } from '@ant-design/icons';

const MovieListItem = ({ movie, showEditMovieModal, showDeleteMovieModal }) => {
  const { image, title, genre, date } = movie;

  const content = (
    <div className="context-menu">
      <span>{<CloseOutlined />}</span>
      <p onClick={() => showEditMovieModal(movie)}
         className="context-menu__item">Edit</p>
      <p onClick={() => showDeleteMovieModal(movie)}
         className="context-menu__item">Delete</p>
    </div>
  );

  return (
    <Dropdown overlay={content} trigger={['contextMenu']}>
      <div className="movie-list__item">
        <img src={image} className="movie-list__image" />
        <div className="movie-list__details">
          <span className="movie-list__title">{title}</span>
          <div className="movie-list__release-date">{date}</div>
        </div>
        <div className="movie-list__genre">{genre}</div>
      </div>
    </Dropdown>
  );
};
 
MovieListItem.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number
  }),
  showEditMovieModal: PropTypes.func.isRequired
};

export default MovieListItem;