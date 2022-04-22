import React, { Component } from "react";

class Validate extends Component {
  state = {
    formData: this.props.details,
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validated();
    this.setState({ errors: errors });
    let errCount = Object.keys(errors).length;
    if (errCount > 0) return;
    console.log("Successfully submitted");
    this.props.onSubmit(this.state.formData);
  };

  validated = () => {
    let errs = {};
    if (!this.state.formData.username.trim())
      errs.username = "Employee name is required";
    else if (this.state.formData.username.trim().length < 5)
      errs.username = "Employee name should have 5 characters";
    if (!this.state.formData.age.trim()) errs.age = "Age is required";
    else if (this.state.formData.age.trim().length < 20)
      errs.age = "Age should be greater than 20";
    if (!this.state.formData.email.trim()) errs.email = "Email id is required";
    else if (this.state.formData.email.trim())
      errs.email = "Email should have @ in it";
    if (!this.state.formData.city.trim()) errs.city = "City is required";
    else if (this.state.formData.city.trim().length < 3)
      errs.city = "City should have 3 character in it";
    return errs;
  };

  isFormInvalid = () => {
    let err = this.validated();
    let errCount = Object.keys(err).length;
    return errCount > 0;
  };

  validateInput = (e) => {
    switch (e.currentTarget.name) {
      case "username":
        if (!e.currentTarget.value.trim()) return "Product name is required";
        else if (this.state.formData.username.trim().length < 5)
          return "Product name should have 5 characters";
        break;
      case "Age":
        if (!this.state.formData.age.trim()) return "Age is required";
        else if (this.state.formData.age.trim().length > 20)
          return "Age should be greater than 20";
        break;
      case "email":
        if (!this.state.formData.email.trim()) return "Email id is required";
        else if (this.state.formData.email.trim())
          return "Email should have @ in it";
      case "city":
        if (!this.state.formData.city.trim()) return "City is required";
        else if (this.state.formData.city.trim().length < 3)
          return "City should have 3 character in it";
        break;
      default:
        break;
    }
    return "";
  };

  handleChange = (e) => {
    let errString = this.validateInput(e);
    const errors = { ...this.state.errors };
    errors[e.currentTarget.name] = errString;
    //let inputVal = e.currentTarget.value;
    const data = { ...this.state.formData };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ formData: data, errors: errors });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              placeholder="Enter name"
              className="form-control"
            />
            {this.state.errors.username ? (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              onChange={this.handleChange}
              id="age"
              name="age"
              type="text"
              placeholder="Enter age"
              className="form-control"
            />
            {this.state.errors.age ? (
              <div className="alert alert-danger">{this.state.errors.age}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              id="email"
              name="email"
              type="text"
              placeholder="Enter email"
              className="form-control"
            />
            {this.state.errors.email ? (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              onChange={this.handleChange}
              id="city"
              name="city"
              type="text"
              placeholder="Enter city"
              className="form-control"
            />
            {this.state.errors.city ? (
              <div className="alert alert-danger">{this.state.errors.city}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              onChange={this.handleChange}
              id="address"
              name="address"
              type="text"
              placeholder="Enter address"
              className="form-control"
            />
            {this.state.errors.address ? (
              <div className="alert alert-danger">
                {this.state.errors.address}
              </div>
            ) : (
              ""
            )}
          </div>
          <br />
          <button className="btn btn-primary" disabled={this.isFormInvalid()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Validate;
