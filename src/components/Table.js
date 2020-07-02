import React from 'react'
import "./styles/table.css"
//import employees from "../lib/employees.json"
//import { render } from 'react-dom'

function Table (props) {
// class Table extends React.Component {

//     state = {
//         employees
//     }

    // render (){
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
  {/* <tbody>
      {this.state.employees.map(employees)} => {
          
        <tr>    
            <td><img alt={employees.name} src={employees.image} /></td>
            <td>{employees.name}</td>
            <td>{employees.phone}</td>
            <td>{employees.email}</td>
            <td>{employees.dob} </td>
        </tr>
          
      }
      
  
  </tbody> */}
  </table>

    
    )
};




export default Table;