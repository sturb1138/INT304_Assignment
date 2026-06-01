import React from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    const saved = localStorage.getItem('employees');
    this.state = {
      employees: saved ? JSON.parse(saved) : []
    };
    this.addEmployee = this.addEmployee.bind(this);
    //this.saveData = this.saveData.bind(this);
  }

  addEmployee(employee) {
    this.setState(prevState => {
      const updated = [...prevState.employees, employee];
      localStorage.setItem('employees', JSON.stringify(updated));
      return { employees: updated };
    });
}

  /*saveData() {
    localStorage.setItem('employees', JSON.stringify(this.state.employees));
    alert('Employees saved!');
  }*/

  render() {
    return (
      <div className="App">
        <EmployeeForm
          addEmployee={this.addEmployee}
          //saveData={this.saveData}
          employees={this.state.employees}
        />
      </div>
    );
  }
}

export default App;