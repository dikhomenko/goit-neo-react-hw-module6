import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearchChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor="search" className={styles.searchlabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
