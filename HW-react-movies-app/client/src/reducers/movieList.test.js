import movieList from './movieList';

const movieMock ={
  id: 337167,
  title: "Fifty Shades Freed",
  tagline: "Don't miss the climax",
  vote_average: 6.1,
  budget: 55000000,
  genres: ["Drama", "Romance"],
  overview: "Believing they have left",
   poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
  release_date: "2018-02-07",
  revenue: 136906000,
  runtime: 106,
  vote_count: 1195,
};

describe('movieList reducer', () => {
  const initialState = {
    movies: [],
    error: null,
    appliedFilter: '',
    query: '',
  };

  it('should return the initial state', () => {
    expect(movieList(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MOVIES_SUCCESS as expected', () => {
    const reducer = movieList(initialState, {
      type: "FETCH_MOVIES_SUCCESS",
      payload: {
        data: [
          movieMock
        ]
      }
    });

    expect(reducer).toEqual({
        movies: [
          movieMock
        ],
        error: null,
        appliedFilter: '',
        query: '',
      });
  });

  it('should handle FETCH_MOVIES_FAILURE as expected', () => {
    const reducer = movieList(initialState, {
      type: "SET_MOVIES_ERROR",
      payload: 'Error'
    });

    expect(reducer).toEqual({
        movies: [],
        error: 'Error',
        appliedFilter: '',
        query: '',
      });
  });

  it('should handle DELETE_MOVIE_SUCCESS as expected', () => {
    const reducer = movieList(initialState, {
      type: "DELETE_MOVIE_SUCCESS",
      id: 1
    });

    expect(reducer).toEqual({
        movies: [],
        error: null,
        appliedFilter: '',
        query: '',
      });
  });

  it('should handle UPDATE_INPUT_VALUE as expected', () => {
    const reducer = movieList(initialState, {
      type: "UPDATE_INPUT_VALUE",
      payload: 'a'
    });

    expect(reducer).toEqual({
        movies: [],
        error: null,
        appliedFilter: '',
        query: 'a'
      });
  });

  it('should handle ADD_MOVIE_SUCCESS as expected', () => {
    const reducer = movieList(initialState, {
      type: "ADD_MOVIE_SUCCESS",
      payload: {
        id: '21',
        title: 'new'
      }
    });

    expect(reducer).toEqual({
        movies: [{
          id: '21',
          title: 'new'
        }],
        error: null,
        appliedFilter: '',
        query: '',
      });
  });

  it('should handle SET_APPLIED_FILTER as expected', () => {
    const reducer = movieList(initialState, {
      type: "SET_APPLIED_FILTER",
      payload: 'Comedy'
    });

    expect(reducer).toEqual({
        movies: [],
        error: null,
        appliedFilter: 'Comedy',
        query: '',
      });
  });
});