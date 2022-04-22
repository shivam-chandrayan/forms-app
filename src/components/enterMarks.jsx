import React, { Component } from "react";

class EnterMarks extends Component {
  state = { studentdata: {} };

  handleChange = (e) => {
    let inpValue = e.currentTarget.value;
    const data = { ...this.state.studentdata };
    data[e.currentTarget.name] = inpValue;
    this.setState({ studentdata: data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let tempObj = { ...this.props.editDetails, ...this.state.studentdata };
    tempObj.total =
      Number(tempObj.maths) +
      Number(tempObj.english) +
      Number(tempObj.computer) +
      Number(tempObj.science);
    this.props.onSubmit(tempObj);
  };

  render() {
    return (
      <div className="comtainer">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="maths">Maths</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="maths"
              name="maths"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="english">English</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="english"
              name="english"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="computer">Computer</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="computer"
              name="computer"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="science">Science</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="science"
              name="science"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default EnterMarks;
