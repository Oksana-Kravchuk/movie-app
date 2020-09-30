import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  toggleDeleteMovieModal,
  toggleEditMovieModal,
  toggleMoviePopover,
} from '../../actions';
import './MoviePopover.scss';

const MoviePopover = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="popover-menu">
      <span onClick={() => dispatch(toggleMoviePopover())}>
        <CloseOutlined />
      </span>
      <p
        onClick={() => dispatch(toggleEditMovieModal(movie))}
        className="popover-menu__item"
      >
        Edit
      </p>
      <p
        onClick={() => dispatch(toggleDeleteMovieModal(movie))}
        className="popover-menu__item"
      >
        Delete
      </p>
    </div>
  );
};

MoviePopover.propTypes = {
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

export default MoviePopover;
