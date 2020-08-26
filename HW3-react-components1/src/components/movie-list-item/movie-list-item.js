import React from 'react';
import PropTypes from 'prop-types';
import './movie-list-item.scss';

const MovieListItem = ({ movie }) => {
  const { image, title, genre, date } = movie;

    return (
      <div className="movie-list__item">
        <img src={image} className="movie-list__image" />
        <div className="movie-list__details">
          <span className="movie-list__title">{title}</span>
          <div className="movie-list__release-date">{date}</div>
        </div>
        <div className="movie-list__genre">{genre}</div>
      </div>
    );
  };

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number
  }),
};

export default MovieListItem;