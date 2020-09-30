import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleMoviePopover } from '../../actions';
import MoviePopover from '../movie-popover';
import './MovieListItem.scss';

const MovieListItem = ({ movie }) => {
  const dispatch = useDispatch();
  const { activeMovieId } = useSelector(
    (state) => ({
      activeMovieId: state.movie.activeMovieId,
    }),
    shallowEqual,
  );
  const { poster_path: image, title, genres, release_date: date } = movie;

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
        onClick={(ev) => ev.preventDefault()}
        onBlur={() => dispatch(toggleMoviePopover())}
      >
        <div
          className="movie-list__show-menu-button"
          onClick={() => dispatch(toggleMoviePopover(movie.id))}
        />
        {activeMovieId === movie.id ? <MoviePopover movie={movie} /> : ''}
      </div>
    </div>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.number,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
  }),
};

export default MovieListItem;
