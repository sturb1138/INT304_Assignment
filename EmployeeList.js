import React from 'react';
import { Link } from 'react-router-dom';
import '../EmployeeForm.css';

function EmployeeList(props) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {props.employees.map((employee) => (
          <li key={employee.id}>
            <button
              className="delete-btn"
              onClick={() => props.removeEmployee(employee.id)}
            >
              Remove
            </button>
            <Link to={`/employees/${employee.id}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>

      {props.removedEmployees.length > 0 && (
        <>
          <h2>Removed Employees</h2>
          <ul className="removed-list">
            {props.removedEmployees.map((employee) => (
              <li key={employee.id}>{employee.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default EmployeeList;
