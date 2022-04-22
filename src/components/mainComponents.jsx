import React, { Component } from "react";
import Forms from "./forms";

class MainComponents extends Component {
  state = {
    details: [],
    view: 0,
    editIndex: -1,
  };

  handleAddCourse = () => {
    this.setState({ view: 1 });
  };

  handleEditClick = (index) => {
    this.setState({ view: 2, editIndex: index });
  };

  handleSubmit = (newProd) => {
    let prod = [...this.state.details];
    if (this.state.view === 1) prod.push(newProd);
    if (this.state.view === 2) {
      prod[this.state.editIndex] = newProd;
    }
    this.setState({ details: prod, view: 0 });
  };
  render() {
    let details = { username: " " };
    let mode = "add";
    if (this.state.view === 2) {
      details = this.state.details[this.state.editIndex];
      mode = "edit";
    }
    return (
      <div className="container">
        <br />
        {this.state.view > 0 ? (
          <Forms onSubmit={this.handleSubmit} details={details} mode={mode} />
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => this.handleAddCourse()}
          >
            Add Course
          </button>
        )}
        <h4>List of Courses</h4>
        {this.renderCourseList()}
      </div>
    );
  }
  renderCourseList() {
    if (this.state.details.length === 0) return <h6>There are ZERO courses</h6>;
    return (
      <ul>
        {this.state.details.map((prod, index) => (
          <li>
            {prod.username}
            <button
              className="btn btn-warning"
              onClick={() => this.handleEditClick(index)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default MainComponents;
