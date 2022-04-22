import React, { Component } from "react";

class FillingForm extends Component {
  state = {
    details: {},
    name: "",
    destination: "",
    task: "",
    showJobDetails: false,
    showCourseDetails: false,
  };

  submitForm = () => {
    alert(JSON.stringify(this.state.details));
  };
  changeHandle = (e) => {
    let obj = { ...this.state.details };
    obj[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ details: obj });
  };
  showJobDetails = () => {
    return (
      <div>
        <strong>Provide Job Details</strong>
        <div className="form-group" onSubmit={this.submitForm}>
          <input
            id="companyName"
            type="text"
            className="form-control"
            onChange={this.changeHandle}
          />
          <label className="form-label" htmlFor="companyName">
            Company Name
          </label>
          <input
            id="desg"
            type="text"
            className="form-control"
            onChange={this.changeHandle}
          />
          <label className="form-label" htmlFor="desg">
            Designation
          </label>
        </div>
      </div>
    );
  };
  showCourseDetails = () => {
    return (
      <div>
        <strong>Provide Course Details</strong>
        <div className="form-group">
          <input
            id="collegeName"
            type="text"
            className="form-control"
            onChange={this.changeHandle}
          />
          <label className="form-label" htmlFor="collegeName">
            College Name
          </label>
          <input
            id="course"
            type="text"
            className="form-control"
            onChange={this.changeHandle}
          />
          <label className="form-label" htmlFor="course">
            Course
          </label>
        </div>
      </div>
    );
  };

  handleChange = (e) => {
    if (e.currentTarget.id === "working" && e.currentTarget.checked) {
      this.setState({ showJobDetails: true, showCourseDetails: false });
    }
    if (e.currentTarget.id === "studying" && e.currentTarget.checked) {
      this.setState({ showCourseDetails: true, showJobDetails: false });
    }
  };
  render() {
    return (
      <div className="container">
        <h4>Provide details below</h4>
        <div className="form-check">
          <input
            value="Working"
            onChange={this.handleChange}
            id="working"
            name="task"
            type="radio"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="working">
            Working
          </label>
        </div>
        <div className="form-check">
          <input
            value="Studying"
            onChange={this.handleChange}
            id="studying"
            name="task"
            type="radio"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="studying">
            Studying
          </label>
        </div>
        {this.state.showJobDetails && this.showJobDetails()}
        {this.state.showCourseDetails && this.showCourseDetails()}
        {this.state.showJobDetails || this.state.showCourseDetails ? (
          <button className="btn btn-primary" onClick={() => this.submitForm()}>
            Submit
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default FillingForm;
