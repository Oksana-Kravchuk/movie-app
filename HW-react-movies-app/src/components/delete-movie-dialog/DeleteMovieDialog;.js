import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import './DeleteMovieDialog.scss';

const DeleteMovieDialog = ({ deleteMovie }) => {
  return (
    <>
      <div>Are you sure you want to delete this movie</div>
      <Button type="primary"
              onClick={deleteMovie}
              className="delete-movie-modal__button">
                Confirm</Button>
    </>
  );
};

DeleteMovieDialog.propTypes = {
  deleteMovie: PropTypes.func
};

export default DeleteMovieDialog;
