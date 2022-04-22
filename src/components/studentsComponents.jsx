import React, { Component } from "react";
import Student from "./student";
import ShowTable from "./showTable";
import EnterMarks from "./enterMarks";

class StudentsComponents extends Component {
  state = {
    details: [],
    newStudent: false,
    viewAllStudents: false,
    welcomeMsg: true,
    editIndex: -1,
    enterMarks: false,
  };

  enterMarks = (index) => {
    console.log(index);
    this.setState({
      viewAllStudents: false,
      newStudent: false,
      enterMarks: true,
      editIndex: index,
    });
  };
  handleEditStudent = (newDetails) => {
    let cus = [...this.state.details];
    cus.splice(this.state.editIndex, 1, newDetails);
    this.setState({ details: cus, newStudent: false, viewAllStudents: true });
  };
  handleSubmit = (newCus) => {
    let cus = [...this.state.details];
    cus.push(newCus);
    this.setState({ details: cus, newStudent: false, viewAllStudents: true });
  };
  handleMarksSubmit = (obj) => {
    let temp = [...this.state.details];
    temp.splice(this.state.editIndex, 1, obj);
    console.log(obj);
    this.setState({
      details: temp,
      viewAllStudents: true,
      enterMarks: false,
      editIndex: -1,
    });
  };
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-primary m-2"
          onClick={() =>
            this.setState({
              newStudent: true,
              viewAllStudents: false,
              welcomeMsg: false,
            })
          }
        >
          New Student
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() =>
            this.setState({
              viewAllStudents: true,
              newStudent: false,
              welcomeMsg: false,
            })
          }
        >
          List of Students
        </button>
        <br />
        {this.state.welcomeMsg === true ? (
          <h4>Welcome to Student Management System</h4>
        ) : (
          ""
        )}
        {this.state.newStudent === true ? (
          <Student
            onSubmit={this.handleSubmit}
            handleEditStudent={this.handleEditStudent}
            editDetails={this.state.details[this.state.editIndex]}
          />
        ) : (
          ""
        )}

        {/* view All students */}
        {this.state.viewAllStudents === true ? (
          this.state.details.length === 0 ? (
            <h4>There are zero students</h4>
          ) : (
            <ShowTable
              details={this.state.details}
              enterMarks={this.enterMarks}
            />
          )
        ) : (
          ""
        )}

        {/* enter marks */}
        {this.state.enterMarks === true ? (
          <EnterMarks
            onSubmit={this.handleMarksSubmit}
            // handleEditStudent={this.handleEditStudent}
            editDetails={this.state.details[this.state.editIndex]}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default StudentsComponents;
