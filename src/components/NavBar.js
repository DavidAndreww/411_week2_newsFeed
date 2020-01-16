import React from "react";

const NavBar = ({ handleSearchbarChange, searchTerm }) => {
  console.log(searchTerm)
  return (
    <nav>
      <h1>News Feed</h1>
      <form>
        <label>Sort by: </label>
        <select>
          <option value="date">
            Date
          </option>
          <option value="author">Author</option>
          <option value="popular">Most Popular</option>
        </select>
        <br />
        <label>Search Titles: </label>
        <input id="search-query" value={searchTerm} type="text" onChange={handleSearchbarChange}></input>
      </form>
    </nav> 
  );
};

export default NavBar;
