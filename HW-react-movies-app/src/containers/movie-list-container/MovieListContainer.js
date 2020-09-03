import React, { Component } from 'react';
import MovieList from '../../components/movie-list';
import ResultCount from '../../components/result-count'
import apiUrl from './api';
import EditMovieForm from '../../components/edit-movie-form';
import DeleteMovieDialog from '../../components/delete-movie-dialog';
import { Spin, Modal } from 'antd';

class MovieListContainer extends Component {
  state = {
    movies: [],
    isLoading: true,
    isEditMovieModalVisible: false,
    isDeleteMovieModalVisible: false,
    movieForDeleting: {},
    movieForEditing: {}
  };

  componentDidMount() {
    apiUrl.getMovies()
      .then(movies => this.setState({ movies: movies, isLoading: false}))
  }

  showEditMovieModal = (movie) => {
    this.setState({
      isEditMovieModalVisible: true,
      movieForEditing: movie
    });
  }

  showDeleteMovieModal = (movie) => {
    this.setState({
      isDeleteMovieModalVisible: true,
      movieForDeleting: movie
    });
  }
  
  closeDeleteMovieModal = () => {
    this.setState({
      isDeleteMovieModalVisible: false,
    });
  }

  closeEditMovieModal = () => {
    this.setState({
      isEditMovieModalVisible: false,
    });
  }

  render() {
    if (this.state.isLoading) {
        return <Spin />;
    }

    return (
      <>
        <ResultCount amount={ this.state.movies.length }/>
        <MovieList movies={ this.state.movies }
                   showEditMovieModal={this.showEditMovieModal}
                   showDeleteMovieModal={this.showDeleteMovieModal} />
        <Modal visible={this.state.isEditMovieModalVisible}
               onCancel={this.closeEditMovieModal}
               footer={null}
               title="Edit Movie"
               wrapClassName="edit-movie-modal">
          <EditMovieForm movie={this.state.movieForEditing}/>
        </Modal>
        <Modal visible={this.state.isDeleteMovieModalVisible}
               onCancel={this.closeDeleteMovieModal}
               footer={null}
               title="Delete Movie"
               wrapClassName=" delete-movie-modal">
          <DeleteMovieDialog movie={this.state.movieForDeleting}/>
        </Modal>
      </>
    )
  }
}

export default MovieListContainer;