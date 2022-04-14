import React from "react";
import { Link } from "react-router-dom";
import styles from "./employeeList.module.css";

class EmployeeList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <table border="1" className={styles.employeeTable}>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>DOB Name</td>
              <td>Designation Name</td>
              <td>Profile Photo</td>
              <td>Experience</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.props.empList.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.dob}</td>
                  <td>{emp.designation}</td>
                  <td><img src={emp.profilePhoto} alt={emp.profilePhoto} /></td>
                  <td>{emp.exp}</td>
                  <td>
                    <Link to={`/edit/${emp.id}`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => this.props.onDelete(emp.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <Link to="/add">Add Record</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default EmployeeList;
