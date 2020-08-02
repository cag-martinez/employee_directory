import React from 'react'

function Table (props) {
    return (
   <table className ="table">
  <thead>
    <tr>
      <th>Image</th>
      <th onClick={props.handleOrder}>Name</th>
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