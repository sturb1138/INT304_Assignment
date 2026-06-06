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
    this.state = {
      employees: saved ? JSON.parse(saved) : []
    };
    this.addEmployee = this.addEmployee.bind(this);
  }

  addEmployee(employee) {
    this.setState(prevState => {
      const newEmployee = {
        ...employee,
        id: Date.now().toString()  // generates a unique id
      };
      const updated = [...prevState.employees, newEmployee];
      localStorage.setItem('employees', JSON.stringify(updated));
      return { employees: updated };
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
                <EmployeeList employees={this.state.employees} />
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