import React from "react";

const Search = (props) => {
  return (
    <div>
      <br />
      <div className="box" id="search-bar">
        <input type="text" id="search" placeholder="Search by name" 
        onChange = {(e)=>props.searchSpace(e)}/>
      </div>
    </div>
  );
}

export default Search;
