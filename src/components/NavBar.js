import React from "react";

const NavBar = ({ handleFormChange, searchTerm, searchTitles }) => {
  return (
    <nav>
      <h1>News Feed</h1>
      <form onSubmit={searchTitles}>
        <label>Sort by: </label>
        <select id="sortBy" onChange={handleFormChange}>
          <option value="date">Most Recent</option>
          <option value="author">Author</option>
          <option value="popular">Most Popular</option>
        </select>
        <br />
        <label>Search Titles: </label>
        <input
          id="searchTerm"
          value={searchTerm}
          type="text"
          onChange={handleFormChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default NavBar;
