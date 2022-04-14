import React from "react";
import { withRouter } from "react-router-dom";

class AddEmployeeForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.onAdd}>
        <div>
          <label>First Name</label>
          <input
            name="firstName"
            value={this.props.firstName}
            onChange={this.props.onChangeEvent}
            required
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            name="lastName"
            value={this.props.lastName}
            onChange={this.props.onChangeEvent}
            required
          ></input>
        </div>
        <div>
          <label>DOB</label>
          <input
            type="date"
            name="dob"
            value={this.props.dob}
            onChange={this.props.onChangeEvent}
            required
          ></input>
        </div>
        <div>
          <label>Designation</label>
          <input
            name="designation"
            value={this.props.designation}
            onChange={this.props.onChangeEvent}
            required
          ></input>
        </div>
        <div>
          <label>Profile Photo</label>
          <input
            name="profilePhoto"
            value={this.props.profilePhoto}
            onChange={this.props.onChangeEvent}
            required
          ></input>
        </div>
        <div>
          <label>Experience</label>
          <input
            name="exp"
            value={this.props.exp}
            onChange={this.props.onChangeEvent}
            required
          ></input>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default withRouter(AddEmployeeForm);
