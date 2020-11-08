import configureMockStore  from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';

import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore (middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates ADD_MOVIE_SUCCESS when adding movie has been done', () => {
    fetchMock.post('api/movies', {
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: 1 }),
    });

    const expectedActions = [
      { type: 'ADD_MOVIE_SUCCESS', payload: { id: 1 } },
      { type: 'TOGGLE_ADD_MOVIE_MODAL' }
    ];
    const store = mockStore({ movies: [] });

    return store.dispatch(actions.addMovie()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates SET_MOVIES_ERROR when adding movie has been failed', async () => {
    fetchMock.post('api/movies', 400);

    const store = mockStore({ movies: [] });

    try {
      await store.dispatch(actions.addMovie()).then(() => store.getActions());
    } catch (e) {
      expect(e).toEqual({
        error: 'Error',
      });
    }
  });

  it('creates DELETE_MOVIE_SUCCESS when deleting movie has been done', () => {
    const movieId = 21;
    fetchMock.delete(`api/movies/${movieId}`, 200);

    const expectedActions = [
      { type: 'DELETE_MOVIE_SUCCESS', payload: { id: 21 } },
      { type: 'TOGGLE_DELETE_MOVIE_MODAL' }
    ];
    const store = mockStore({ movies: [] });

    return store.dispatch(actions.deleteMovie()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates SET_MOVIES_ERROR when deleting movie has been failed', async () => {
    const movieId = 21;
    fetchMock.delete(`api/movies/${movieId}`, 400);
    const store = mockStore({ movies: [] });

    try {
      await store.dispatch(actions.deleteMovie()).then(() => store.getActions());
    } catch (e) {
      expect(e).toEqual({
        error: 'Error',
      });
    }
  });  

  it('creates UPDATE_MOVIE_SUCCESS when updating movie has been done', () => {
    const movie = {
      id: '2',
      title: 'title'
    };

    fetchMock.post('api/movies', {
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    });

    const expectedActions = [
      { type: 'UPDATE_MOVIE_SUCCESS', payload: movie },
      { type: 'TOGGLE_EDIT_MOVIE_MODAL' }
    ];
    const store = mockStore({ movies: [] });

    return store.dispatch(actions.updateMovie()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates SET_MOVIES_ERROR when updating movie has been failed', async () => {
    fetchMock.post('api/movies', 400);

    const store = mockStore({ movies: [] });

    try {
      await store.dispatch(actions.updateMovie()).then(() => store.getActions());
    } catch (e) {
      expect(e).toEqual({
        error: 'Error',
      });
    }
  });  
});