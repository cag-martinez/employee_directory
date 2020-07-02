import React from "react";

function Header() {
    return(
        <div className="App jumbotron jumbotron-fluid" id="robotron">
        <div className="App-header container">
          <h2 className="display-4">Employee-Directory</h2>
          <p>
            Click on the name carrot to filter in asending or decending order
            or use the search bar to search by name.
          </p>
          </div>
        </div>
    );
}

export default Header;
