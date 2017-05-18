import React from 'react';
import PropTypes from 'prop-types';

/**
 * This function renders the pagination component
 *
 * @export
 * @param {...props} { props }
 * return HTML
 */
export default function PaginationNav({ index, selected, isActive, notActive, handlePagination }) {
  const limit = 5;
  const offset = index * 5;
  return (
    <li key={index}
    className={selected === `${index + 1}` ? isActive : notActive}><a
    onClick={e => handlePagination(limit, offset, e)}>{index + 1}</a></li>
  );
}

PaginationNav.propTypes = {
  index: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  isActive: PropTypes.string.isRequired,
  notActive: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
};

