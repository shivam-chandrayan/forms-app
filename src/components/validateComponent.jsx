import React, { Component } from "react";
import Validate from "./validate";

class ValidateComponent extends Component {
  state = {
    details: {
      username: "",
      age: "",
      email: "",
      city: "",
      address: "",
    },
    view: 0,
  };

  handleGetDetails = () => {
    this.setState({ view: 1 });
  };

  handleSubmitDetils = (formData) => {
    console.log(formData);
    this.setState({ details: formData, view: 0 });
  };
  render() {
    let getDetails = { ...this.state.details };
    return (
      <div className="container">
        {this.state.view === 1 ? (
          <Validate details={getDetails} onSubmit={this.handleSubmitDetils} />
        ) : (
          <React.Fragment>
            <h4>Details of the Course are</h4>
            <h6>Name : {this.state.username}</h6>
            <h6>Age : {this.state.age}</h6>
            <h6>Email Id : {this.state.email}</h6>
            <h6>City : {this.state.city}</h6>
            <h6>Address : {this.state.address}</h6>
            <button
              className="btn btn-primary"
              onClick={() => this.handleGetDetails()}
            >
              Get Product Details
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ValidateComponent;
