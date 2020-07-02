import React from "react";
//import employees from "./lib/employees.json"

const Search = (props) => {
  return (
    <div>
      <br />
      <div className="box" id="search-bar">
        <input type="text" id="search" placeholder="Search by name" 
        onChange = {(e)=>props.searchSpace(e)}/>
      
        {/* <button type="button" className="btn btn-link"
        onClick={this.handleFormSubmit}>Search</button> */}
      </div>
    </div>
  );
}

export default Search;
// on line 10 i added the value and on change attributes to handle the search
//on line 13 i added a onclick for the button