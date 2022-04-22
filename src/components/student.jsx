import React, { Component } from "react";

class Student extends Component {
  state = {
    studentdata: {
      name: "",
      course: " ",
      year: " ",
    },
    edit: false,
  };

  handleChange = (e) => {
    let inpValue = e.currentTarget.value;
    const data = { ...this.state.studentdata };
    data[e.currentTarget.name] = inpValue;
    this.setState({ studentdata: data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.studentdata);
    this.state.studentdata["total"] = "No Data";
    this.props.onSubmit(this.state.studentdata);
  };

  render() {
    return (
      <div className="comtainer">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={this.state.studentdata.name}
              onChange={this.handleChange}
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="course"
              name="course"
              placeholder="Enter course"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="year"
              name="year"
              placeholder="Enter year"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Student;
