import React from "react";

function Search() {
  return (
    <div>
      <br />
      <div className="box" id="search-bar">
        <input type="search" id="search" placeholder="Search" />
      
      <button type="button" className="btn btn-link">Search</button>
      </div>
    </div>
  );
}

export default Search;
