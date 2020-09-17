import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import './MovieDetail.scss';

const MovieDetail = ({ movie }) => {
  const {
    poster_path: image,
    title,
    genres = [],
    release_date: date = '',
    vote_average: vote,
    runtime,
    overview,
  } = movie;

  return (
    <div className="movie-detail">
      <img src={image} className="movie-detail__image" alt={title} />
      <div className="movie-detail__main">
        <Row>
          <div className="movie-detail__title">{title}</div>
          <div className="movie-detail__release-vote">{vote}</div>
        </Row>
        <div className="movie-detail__genre">{genres.join(', ')}</div>
        <div className="movie-detail__row">
          <div className="movie-detail__release-date">{date.slice(0, 4)}</div>
          <div className="movie-detail__release-runtime">
            {runtime}
            <span> min</span>
          </div>
        </div>
        <div className="movie-detail__release-overview">{overview}</div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
};

export default MovieDetail;
