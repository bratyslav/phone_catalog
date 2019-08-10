import React from 'react';

const Filter = ({ setFilter, setSortType }) => (
  <div className="search__wrapper">
    <label>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={setFilter}
        />
        <hr />
      </div>
    </label>

    <select onChange={setSortType}>
      <option hidden>Select sort type</option>
      <option>Alphabetical</option>
      <option>Newest</option>
    </select>
  </div>
);

export default Filter;