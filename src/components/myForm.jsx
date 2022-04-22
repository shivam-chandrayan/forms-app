import React, { Component } from "react";
import NewCustomer from "./newCustomer";
import CustomerList from "./customerList";

class MyForm extends Component {
  state = {
    customers: [],
    toggleNewCustomer: false,
    toggleList: false,
    editIndex: -1,
    cusDetails: {},
  };

  handleCustomerAdd = (cus) => {
    let { customers, editIndex } = this.state;
    if (editIndex > -1) customers.splice(editIndex, 1, cus);
    else customers.push(cus);
    this.setState({
      customers,
      toggleNewCustomer: false,
      toggleList: true,
      editIndex: -1,
    });
  };

  handleEditCustomer = (index, details) => {
    this.setState({
      editIndex: index,
      cusDetails: details,
      toggleNewCustomer: true,
      toggleList: false,
    });
  };

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-primary m-2"
          onClick={() =>
            this.setState({ toggleList: false, toggleNewCustomer: true })
          }
        >
          New Customer
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() =>
            this.setState({ toggleList: true, toggleNewCustomer: false })
          }
        >
          List of Customers
        </button>
        {this.state.toggleNewCustomer && (
          <div>
            <NewCustomer
              onCustomerAdd={this.handleCustomerAdd}
              editIndex={this.state.editIndex}
              cusDetails={this.state.cusDetails}
            />
          </div>
        )}
        {this.state.toggleList && (
          <div>
            <CustomerList
              list={this.state.customers}
              onEditCustomer={this.handleEditCustomer}
            />
          </div>
        )}
        {!this.state.toggleNewCustomer && !this.state.toggleList && (
          <h4>Welcome to the Customer System</h4>
        )}
      </div>
    );
  }
}

export default MyForm;
