import React, { Component } from "react";

class Forms extends Component {
  state = {
    formdata: this.props.details,
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    const prod = { ...this.state.formdata };
    prod[input.name] = input.value;
    this.setState({ formdata: prod });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    this.props.onSubmit(this.state.formdata);
  };
  render() {
    const { course } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Add a Course</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="username"
              name="username"
              placeholder="Enter name"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
