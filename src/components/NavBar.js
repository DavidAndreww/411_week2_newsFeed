import React from "react";

const NavBar = ({ handleFormChange, searchTerm, searchTitles }) => {
  
  return (
      <form onSubmit={searchTitles}>
      <h1>News Feed</h1>
        <label htmlFor="sortBy">Sort by: </label>
        <select id="sortBy" onChange={handleFormChange}>
          <option value="date">Most Recent</option>
          <option value="author">Author</option>
          <option value="popular">Most Popular</option>
        </select>
        <br />
        <label htmlFor="searchTerm">Search Titles: </label>
        <input
          id="searchTerm"
          value={searchTerm}
          type="text"
          onChange={handleFormChange}
        ></input>
        <button type="submit">Search</button>
      </form>
  );
};

export default NavBar;
