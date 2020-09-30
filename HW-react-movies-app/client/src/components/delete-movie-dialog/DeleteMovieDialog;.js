import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { deleteMovie } from '../../actions';
import './DeleteMovieDialog.scss';

const DeleteMovieDialog = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector(
    (state) => ({
      movie: state.movie.movieForDeleting,
    }),
    shallowEqual,
  );

  return (
    <>
      <div>Are you sure you want to delete this movie</div>
      <Button
        type="primary"
        onClick={() => dispatch(deleteMovie(movie.id))}
        className="delete-movie-modal__button"
      >
        Confirm
      </Button>
    </>
  );
};

export default DeleteMovieDialog;
