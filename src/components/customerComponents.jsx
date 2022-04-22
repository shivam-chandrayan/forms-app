import React, { Component } from "react";
import Customer from "./customer";
import ShowTableC from "./showTableC";

class CustomerComponents extends Component {
  state = {
    details: [],
    newCustomer: false,
    viewAllCustomers: false,
    welcomeMsg: true,
  };

  handleSubmit = (newCus) => {
    let cus = [...this.state.details];
    cus.push(newCus);
    this.setState({ details: cus, newCustomer: false, viewAllCustomers: true });
  };
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-primary m-2"
          onClick={() =>
            this.setState({
              newCustomer: true,
              viewAllCustomers: false,
              welcomeMsg: false,
            })
          }
        >
          New Customer
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() =>
            this.setState({
              viewAllCustomers: true,
              newCustomer: false,
              welcomeMsg: false,
            })
          }
        >
          List of Customers
        </button>
        <br />
        {this.state.welcomeMsg === true ? (
          <h4>Welcome to Customer System</h4>
        ) : (
          ""
        )}
        {this.state.newCustomer === true ? (
          <Customer onSubmit={this.handleSubmit} />
        ) : (
          ""
        )}
        {this.state.viewAllCustomers === true ? (
          this.state.details.length === 0 ? (
            <h4>There are ZERO customer</h4>
          ) : (
            <ShowTableC details={this.state.details} />
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CustomerComponents;
