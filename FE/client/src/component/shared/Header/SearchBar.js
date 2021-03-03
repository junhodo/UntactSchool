import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
  const { width } = props;
  return (
    <div style={{ width, marginRight: `${width}px` }}>this is SearchBar</div>
  );
};

SearchBar.propTypes = {
  width: PropTypes.number
};
SearchBar.defaultProps = {
  width: 0
};

export default SearchBar;
