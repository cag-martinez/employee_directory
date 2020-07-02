import React from 'react';
//import logo from './logo.svg';
import './styles/header.css';
import './styles/table.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from "./components/Table"
// import App from "./App.js"
import employees from "./lib/employees.json"

class App extends React.Component {

  state = {
      employees
  }
  render (){
  return (
  <div>
    <Header />
    <Search />
    <Table>
    <ul>
      {this.state.employees.map(employee => {
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
        
        
      
      </ul>
    </Table>
    <employees />
  </div>
  );
}
}

export default App;
