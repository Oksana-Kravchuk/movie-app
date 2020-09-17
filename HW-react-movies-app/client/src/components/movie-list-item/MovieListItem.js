import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieListItem.scss';
import { CloseOutlined } from '@ant-design/icons';
import Popover from '../popover';

const MovieListItem = ({ movie, showEditMovieModal, showDeleteMovieModal }) => {
  const { poster_path: image, title, genres, release_date: date } = movie;
  const [isPopoverOpened, setIsPopoverOpened] = useState(false);

  const content = (
    <>
      <span onClick={() => setIsPopoverOpened(false)}>
        <CloseOutlined />
      </span>
      <p
        onClick={() => showEditMovieModal(movie)}
        className="popover-menu__item"
      >
        Edit
      </p>
      <p
        onClick={() => showDeleteMovieModal(movie)}
        className="popover-menu__item"
      >
        Delete
      </p>
    </>
  );

  return (
    <div className="movie-list__item">
      <img src={image} className="movie-list__image" alt={title} />
      <div className="movie-list__details">
        <span className="movie-list__title">{title}</span>
        <div className="movie-list__release-date">{date.slice(0, 4)}</div>
      </div>
      <div className="movie-list__genre">{genres.join(', ')}</div>
      <div
        tabIndex="0"
        onBlur={() => setIsPopoverOpened(false)}
        onClick={(e) => e.preventDefault()}
      >
        <div
          className="movie-list__show-menu-button"
          onClick={() => setIsPopoverOpened(true)}
        />
        <Popover
          content={content}
          className={`popover-menu ${
            isPopoverOpened ? 'popover-menu--opened' : ''
          }`}
        />
      </div>
    </div>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.number,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
  }),
  showEditMovieModal: PropTypes.func.isRequired,
  showDeleteMovieModal: PropTypes.func.isRequired,
};

export default MovieListItem;
