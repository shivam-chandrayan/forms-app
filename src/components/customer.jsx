import React, { Component } from "react";

class Customer extends Component {
  state = {
    customerdata: {
      name: "",
      gender: " ",
      delivery: " ",
      payment: " ",
    },
    country: ["India", "USA", "France", " Japan", "China"],
    edit: false,
  };

  handleChange = (e) => {
    let inpValue = e.currentTarget.value;
    const data = { ...this.state.customerdata };
    console.log(inpValue, e.currentTarget);
    e.currentTarget.type === "checkbox"
      ? (data["payment"] +=
          e.currentTarget.checked === true ? e.currentTarget.value + " " : "")
      : (data[e.currentTarget.name] = e.currentTarget.value);
    this.setState({ customerdata: data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.customerdata);
    this.state.customerdata["total"] = "No Data";
    this.props.onSubmit(this.state.customerdata);
  };

  render() {
    return (
      <div className="comtainer">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className="form-control"
            />
          </div>
          <div>
            <div className="form-check form-check-inline">
              <input
                value="Male"
                onChange={this.handleChange}
                id="male"
                name="gender"
                type="radio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                value="Female"
                onChange={this.handleChange}
                id="female"
                name="gender"
                type="radio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          <h5>Choose Your Delivary Option</h5>
          <div className="form-check form-check-inline">
            <input
              value="home"
              onChange={this.handleChange}
              id="home"
              name="delivery"
              type="radio"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="home">
              Home
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              value="office"
              onChange={this.handleChange}
              id="office"
              name="delivery"
              type="radio"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="office">
              Office
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              value="pickup"
              onChange={this.handleChange}
              id="pickup"
              name="delivery"
              type="radio"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="pickup">
              Pickup
            </label>
          </div>
          <h5>Choose your Payment Option</h5>
          <div className="form-check">
            <input
              value="CreditCard"
              onChange={this.handleChange}
              id="credit"
              name="payment"
              type="checkbox"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="credit">
              Credit Card
            </label>
          </div>
          <div className="form-check">
            <input
              value="DebitCard"
              onChange={this.handleChange}
              id="debit"
              name="payment"
              type="checkbox"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="debit">
              Debit Card
            </label>
          </div>
          <div className="form-check">
            <input
              value="NetBanking"
              onChange={this.handleChange}
              id="net"
              name="payment"
              type="checkbox"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="net">
              Net Banking
            </label>
          </div>
          <select
            value={this.state.customerdata.country}
            onChange={this.handleChange}
            name="country"
            id="country"
            className="form-control"
          >
            <option value="" disabled>
              Choose Country
            </option>
            {this.state.country.map((a) => (
              <option>{a}</option>
            ))}
          </select>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Customer;
