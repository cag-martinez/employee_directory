import React from 'react';
//import logo from './logo.svg';
import './styles/robotron.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from "./components/Table"
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
    <Table />
    <Wrapper>
    <tbody>
      {this.state.employees.map(employees)} => {
          
        <tr>    
            <td><img alt={employees.name} src={employees.image} /></td>
            <td>{employees.name}</td>
            <td>{employees.phone}</td>
            <td>{employees.email}</td>
            <td>{employees.dob} </td>
        </tr>
          
      }
      </tbody>
    </Wrapper>
    <employees />
  </div>
  );
}
}

export default App;
