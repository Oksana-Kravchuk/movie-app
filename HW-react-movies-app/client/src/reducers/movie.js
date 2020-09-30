const movieModal = (state, action) => {
  if (!state) {
    return {
      error: null,
      isMoviePopoverOpened: false,
      isDeleteMovieModalVisible: false,
      isEditMovieModalVisible: false,
      isAddMovieModalVisible: false,
      movieForEditing: {},
      movieForDeleting: {},
      movieDetail: {},
      activeMovieId: '',
    };
  }

  switch (action.type) {
    case 'TOGGLE_MOVIE_POPOVER':
      return {
        ...state,
        isMoviePopoverOpened: !state.isMoviePopoverOpened,
        activeMovieId: action.payload,
      };

    case 'TOGGLE_DELETE_MOVIE_MODAL':
      return {
        ...state,
        movieForDeleting: action.payload,
        isDeleteMovieModalVisible: !state.isDeleteMovieModalVisible,
      };

    case 'TOGGLE_EDIT_MOVIE_MODAL':
      return {
        ...state,
        movieForEditing: action.payload || state.movieForEditing,
        isEditMovieModalVisible: !state.isEditMovieModalVisible,
      };

    case 'TOGGLE_ADD_MOVIE_MODAL':
      return {
        ...state,
        isAddMovieModalVisible: !state.isAddMovieModalVisible,
      };

    case 'FETCH_MOVIE_SUCCESS':
      return {
        ...state,
        movieDetail: action.payload,
      };

    default:
      return state;
  }
};

export default movieModal;
