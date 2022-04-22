import React, { Component } from "react";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";

class CountrySelect extends Component {
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
    cities: [],
  };

  handleChange = (e) => {
    let { locs, cities } = this.state;
    cities = locs.find((a) => a.country === e.currentTarget.value).cities;
    this.setState({ cities });
  };
  render() {
    const { locs, cities } = this.state;
    return (
      <div className="container">
        <Formik
          initialValues={{}}
          validate={(values) => {
            let errors = {};
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
          render={(formProps, setFieldValue, formik) => {
            return (
              <Form>
                <div className="form-group">
                  <Field
                    className="form-control"
                    name="country"
                    component="select"
                    placeholder="Select country"
                    onChange={this.handleChange}
                  >
                    <option>Select Country</option>
                    {locs.map((a, i) => (
                      <option key={i}>{a.country}</option>
                    ))}
                  </Field>
                </div>
                <div className="form-group">
                  <Field
                    className="form-control"
                    name="city"
                    component="select"
                    placeholder="Select city"
                  >
                    <option>Select City</option>
                    {cities.map((a, i) => (
                      <option key={i}>{a}</option>
                    ))}
                  </Field>
                </div>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        />
      </div>
    );
  }
}

export default CountrySelect;
