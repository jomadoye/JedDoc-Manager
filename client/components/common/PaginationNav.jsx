import React from 'react';
import PropTypes from 'prop-types';

/**
 * This function renders the pagination component
 *
 * @export
 * @param {number} index The index
 * @param {number} selected The currently selected numner
 * @param {boolean} isActive This checks if a number is currently selected
 * @param {boolean} notActive This checks if a number is currently selected
 * @param {function} handlePagination This method calculates the pagination
 * @param {function} isSearchDocument
 *  This checks if a user is currently searching the documents
 * @returns
 */
export default function PaginationNav({ index, selected, isActive, notActive, handlePagination, isSearchDocument }) {
  let limit = 8;
  let offset = 0;
  if (isSearchDocument === true) {
    limit = 8;
    offset = index * 8;
  } else {
    limit = 8;
    offset = index * 8;
  }
  return (
    <li key={index}
    className={selected === `${index + 1}` ? isActive : notActive}>
    <a onClick={e => handlePagination(limit, offset, e, index)}>
      {index + 1}</a></li>
  );
}

PaginationNav.propTypes = {
  index: PropTypes.number.isRequired,
  selected: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  notActive: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  isSearchDocument: PropTypes.bool,
};

