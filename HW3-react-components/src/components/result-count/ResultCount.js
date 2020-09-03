import React from 'react';
import PropTypes from 'prop-types';
import './ResultCount.scss';

const ResultCount = ({ amount }) => {
  return (
      <div className="results-count">
        <div className="results-count__main">{amount}</div>
        <div>movies found</div>
      </div>
  )
}

ResultCount.propTypes = {
  amount: PropTypes.number
}

export default ResultCount;