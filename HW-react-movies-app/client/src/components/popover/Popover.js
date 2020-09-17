import React from 'react';
import PropTypes from 'prop-types';

const Popover = ({ content, className }) => {
  return (
    <div className={className}>
      {content}
      <div />
    </div>
  );
};

Popover.propTypes = {
  content: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Popover;
