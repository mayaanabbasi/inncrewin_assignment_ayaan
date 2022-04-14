import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeList from "./component/EmployeeList/employeeList";
import AddEmployeeForm from "./component/AddEmployeeForm/addEmployeeForm";

class App extends React.Component {
  state = {
    employeeList: [
      {
        id: 1,
        firstName: "test",
        lastName: "test",
        dob: "2022-04-08",
        designation: "test",
        profilePhoto: "https://picsum.photos/200",
        exp: "test",
      },
    ],
    firstName: "",
    lastName: "",
    dob: "",
    designation: "",
    profilePhoto: "",
    exp: "",
  };

  uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnAdd = (event) => {
    event.preventDefault();
    const empObj = {
      id: this.uuidv4(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      designation: this.state.designation,
      profilePhoto: this.state.profilePhoto,
      exp: this.state.exp,
    };
    const updatedEmpList = [...this.state.employeeList, empObj];
    this.setState(
      {
        employeeList: updatedEmpList,
        firstName: "",
        lastName: "",
        dob: "",
        designation: "",
        profilePhoto: "",
        exp: "",
      },
      () => {
        window.history.back();
      }
    );
  };

  handleOnDelete = (id) => {
    const deleteFlag = window.confirm("Are you sure you want to delete?");
    if (deleteFlag) {
      const updatedEmpList = this.state.employeeList.filter(
        (emp) => emp.id != id
      );
      this.setState({ employeeList: updatedEmpList });
    }
  };

  render() {
    return (
      <div className="container">
        <Router>
          <div className="col-md-12">
            <h1 className="text-center" style={style}></h1>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <EmployeeList
                    empList={this.state.employeeList}
                    onDelete={this.handleOnDelete}
                  />
                )}
              />
              <Route
                path="/edit/:id"
                exact
                render={(props) => (
                  <AddEmployeeForm
                    onAdd={this.handleOnAdd}
                    empList={this.state.employeeList}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    designation={this.state.designation}
                    dob={this.state.dob}
                    profilePhoto={this.state.profilePhoto}
                    exp={this.state.exp}
                    onChangeEvent={this.handleOnChange}
                  />
                )}
              />
              <Route
                path="/add"
                render={(props) => (
                  <AddEmployeeForm
                    onAdd={this.handleOnAdd}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    designation={this.state.designation}
                    dob={this.state.dob}
                    profilePhoto={this.state.profilePhoto}
                    exp={this.state.exp}
                    onChangeEvent={this.handleOnChange}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
