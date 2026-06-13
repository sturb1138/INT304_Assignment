import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    const saved = localStorage.getItem('employees');
    const savedRemoved = localStorage.getItem('removedEmployees');
    this.state = {
      employees: saved ? JSON.parse(saved) : [],
      removedEmployees: savedRemoved ? JSON.parse(savedRemoved) : []
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.removeEmployee = this.removeEmployee.bind(this);
  }

  addEmployee(employee) {
    this.setState(prevState => {
      const newEmployee = {
        ...employee,
        id: Date.now().toString()
      };
      const updated = [...prevState.employees, newEmployee];
      localStorage.setItem('employees', JSON.stringify(updated));
      return { employees: updated };
    });
  }

  removeEmployee(id) {
    this.setState(prevState => {
      const employee = prevState.employees.find(e => e.id === id);
      const updated = prevState.employees.filter(e => e.id !== id);
      const updatedRemoved = [...prevState.removedEmployees, employee];
      localStorage.setItem('employees', JSON.stringify(updated));
      localStorage.setItem('removedEmployees', JSON.stringify(updatedRemoved));
      return { employees: updated, removedEmployees: updatedRemoved };
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <EmployeeForm addEmployee={this.addEmployee} />
                <EmployeeList
                  employees={this.state.employees}
                  removedEmployees={this.state.removedEmployees}
                  removeEmployee={this.removeEmployee}
                />
              </>
            } />
            <Route path="/employees/:id" element={
              <EmployeeDetail employees={this.state.employees} />
            } />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
