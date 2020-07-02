import React from 'react';
//import logo from './logo.svg';
import './styles/header.css';
import './styles/table.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from "./components/Table"

import employees from "./lib/employees.json"

class App extends React.Component {


  state={
      employees,
      search: '',
      filteredArray: []
    }
 

searchSpace=(event)=>{
    let keyword = event.target.value;
    console.log("this is the word" , keyword)
    var newFilteredArray= []
    this.state.employees.map(function (emp) {
      if( keyword.toLowerCase() === emp.name.substring(0 , keyword.length).toLowerCase())(
        // console.log("found a match", emp)
        newFilteredArray.push(emp)
      )
    })
    
    console.log(newFilteredArray)
    this.setState({search:keyword, filteredArray: newFilteredArray}) 
  }


  
  render (){
console.log(this.state)
var employeesToShow = this.state.employees

if (this.state.filteredArray.length > 0){
  employeesToShow = this.state.filteredArray
}

  return (
  <div>
    <Header />
    <Search searchSpace={this.searchSpace} />
    <Table>
    <tbody>
      {employeesToShow.map(employee => {
        return (
        <tr key={employee.id}>    
        <td><img alt={employee.name} src={employee.image} /></td>
        <td>{employee.name}</td>
        <td>{employee.phone}</td>
        <td>{employee.email}</td>
        <td>{employee.dob} </td>
        </tr>
        );
        }
      )}
      </tbody>
    </Table>
    {/* <employees /> */}
  </div>
  );
}
}

export default App;
