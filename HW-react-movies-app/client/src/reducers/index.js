import { combineReducers } from 'redux';
import movieList from './movieList';
import movie from './movie';

export default combineReducers({
  movieList,
  movie,
});
