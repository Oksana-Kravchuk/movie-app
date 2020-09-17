import React, { useCallback, useState } from 'react';
import { Spin, Modal } from 'antd';
import MovieList from '../../components/movie-list';
import ResultCount from '../../components/result-count';
import EditMovieForm from '../../components/edit-movie-form';
import DeleteMovieDialog from '../../components/delete-movie-dialog';
import { useRequest } from '../../hooks';

const MovieListContainer = () => {
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
  const [movieForDeleting, setMovieForDeleting] = useState({});
  const [movieForEditing, setMovieForEditing] = useState({});

  const getRequest = () => {
    return fetch('/api/movies').then((res) => res.json());
  };

  const useMoviesData = () => {
    const request = useCallback(() => getRequest(), []);
    return useRequest(request);
  };

  const [movies = [], dataLoading = true] = useMoviesData();

  const showEditMovieModal = (movie) => {
    setEditModalVisibility(true);
    setMovieForEditing(movie);
  };

  const showDeleteMovieModal = (movie) => {
    setDeleteModalVisibility(true);
    setMovieForDeleting(movie);
  };

  if (dataLoading) {
    return <Spin />;
  }

  return (
    <>
      <ResultCount amount={movies.totalAmount} />
      <MovieList
        movies={movies.data}
        showEditMovieModal={showEditMovieModal}
        showDeleteMovieModal={showDeleteMovieModal}
      />
      <Modal
        visible={editModalVisibility}
        onCancel={() => setEditModalVisibility(false)}
        footer={null}
        title="Edit Movie"
        wrapClassName="edit-movie-modal"
      >
        <EditMovieForm movie={movieForEditing} />
      </Modal>
      <Modal
        visible={deleteModalVisibility}
        onCancel={() => setDeleteModalVisibility(false)}
        footer={null}
        title="Delete Movie"
        wrapClassName=" delete-movie-modal"
      >
        <DeleteMovieDialog movie={movieForDeleting} />
      </Modal>
    </>
  );
};

export default MovieListContainer;
