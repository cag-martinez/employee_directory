import React from 'react'
import "../styles/table.css"


function Table (props) {

    return (
   <table className ="table responsive">
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
  </thead>
  {props.children}
  </table>

    
    )
};




export default Table;