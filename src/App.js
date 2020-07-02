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
      filteredArray: [],
      ascending: true
    }
 

searchSpace=(event)=>{
    let keyword = event.target.value;
    console.log("this is the word" , keyword)
    var newFilteredArray= []
    this.state.employees.map(function (emp) {
      if( keyword.toLowerCase() === emp.name.substring(0 , keyword.length).toLowerCase())(
        
        newFilteredArray.push(emp)
      )
    })
    
    console.log(newFilteredArray)
    this.setState({search:keyword, filteredArray: newFilteredArray}) 
  }

handleOrder= () => {
  console.log("we got clicked")
  var oldOrder = this.state.employees

  var self = this
  function compare( a, b ) {
    if(self.state.ascending === true){
      if ( a.name.split(' ')[0] < b.name.split(' ')[0]){
        return -1;
      }
      if ( a.name.split(' ')[0] > b.name.split(' ')[0] ){
        return 1;
      }
      return 0;
    }
    else{
      if ( a.name.split(' ')[0] > b.name.split(' ')[0]){
        return -1;
      }
      if ( a.name.split(' ')[0] < b.name.split(' ')[0] ){
        return 1;
      }
      return 0;
    }
    
  }
  
  var newOrder = oldOrder.sort( compare );

  console.log("what happened", newOrder)
  this.setState({employees: newOrder, ascending: !this.state.ascending})
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
    <Table handleOrder={this.handleOrder}>
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
