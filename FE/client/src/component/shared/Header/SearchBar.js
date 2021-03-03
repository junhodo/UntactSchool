import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
  const { className, width } = props;
  return (
    <div className={className} style={{ width }}>
      <input type="text" />
    </div>
  );
};

SearchBar.propTypes = {
  width: PropTypes.number,
  className: PropTypes.string
};

SearchBar.defaultProps = {
  width: 0,
  className: ''
};

export default SearchBar;
