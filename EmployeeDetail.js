import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../EmployeeForm.css';

function EmployeeDetail(props) {
  const { id } = useParams();
  const employee = props.employees.find(e => e.id === id);

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <div className="employee-detail">
      <h2>Employee Detail</h2>
      <table>
        <tbody>
          <tr><th>Name</th><td>{employee.name}</td></tr>
          <tr><th>Email</th><td>{employee.email}</td></tr>
          <tr><th>Job Title</th><td>{employee.title}</td></tr>
          <tr><th>Department</th><td>{employee.department}</td></tr>
        </tbody>
      </table>
      <br />
      <Link to="/">← Back to List</Link>
    </div>
  );
}

export default EmployeeDetail;