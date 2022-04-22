import React, { Component } from "react";

class Country extends Component {
  state = {
    locs: [
      {
        country: "India",
        cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"],
      },
      {
        country: "USA",
        cities: [
          "Los Angeles",
          "Chicago",
          "New York",
          "Seattle",
          "Washington DC",
        ],
      },
      { country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"] },
      { country: "Japan", cities: ["Tokyo", "Kyoto"] },
      { country: "China", cities: ["Shanghai", "Beijing", "Shenzen"] },
    ],
    currCity: { country: "", cities: [] },
  };
  selectCity = (e) => {
    let val = e.currentTarget.value;
    let index = this.state.locs.findIndex((a) => a.country === val);
    this.setState({ currCity: this.state.locs[index] });
  };
  render() {
    return (
      <div className="container">
        <select
          className="form-control"
          name="country"
          onChange={this.selectCity}
        >
          <option>Choose Country</option>
          {this.state.locs.map((a) => (
            <option key={a.country}>{a.country}</option>
          ))}
        </select>
        <select className="form-control" name="cities" id="">
          <option>Choose City</option>
          {this.state.currCity.cities.map((a, i) => (
            <option key={i}>{a}</option>
          ))}
        </select>
        <button className="btn btn-primary">Submit</button>
      </div>
    );
  }
}

export default Country;
