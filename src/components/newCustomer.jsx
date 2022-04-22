import React, { Component } from "react";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";

class NewCustomer extends Component {
  state = { initialValues: {} };
  render() {
    const { editIndex, cusDetails } = this.props;
    return (
      <Formik
        initialValues={{
          gender: "",
          name: editIndex > -1 ? cusDetails.name : "",
          type: editIndex > -1 ? cusDetails.type : "",
          creditCard: editIndex > -1 ? cusDetails.creditCard : false,
          debitCard: editIndex > -1 ? cusDetails.debitCard : false,
          netBanking: editIndex > -1 ? cusDetails.netBanking : false,
          deliverySlot: editIndex > -1 ? cusDetails.deliverySlot : "",
        }}
        validate={(values) => {
          let errors = {};
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            this.props.onCustomerAdd(values);
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={(formProps, setFieldValue, formik) => {
          console.log(formProps.values);
          console.log(formProps.values.gender);
          return (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <ErrorMessage name="name" />
              </div>
              <Field
                name="gender"
                render={({ field }) => (
                  <>
                    <div className="radio-item">
                      <input
                        {...field}
                        id="male"
                        value="male"
                        checked={formProps.values.type === "male"}
                        name="type"
                        type="radio"
                      />
                      <label htmlFor="male">Male</label>
                    </div>

                    <div className="radio-item">
                      <input
                        {...field}
                        id="female"
                        value="female"
                        name="type"
                        checked={formProps.values.type === "female"}
                        type="radio"
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </>
                )}
              />{" "}
              <div className="form-group">
                <strong>Choose Your Delivery Options</strong>
                <div>
                  <Field type="checkbox" name="creditCard" id="creditCard" />{" "}
                  <label htmlFor="creditCard">Credit Card</label>
                </div>
                <div>
                  <Field type="checkbox" name="debitCard" id="debitCard" />{" "}
                  <label htmlFor="debitCard">Debit Card</label>
                </div>
                <div>
                  <Field type="checkbox" name="netBanking" id="netBanking" />{" "}
                  <label htmlFor="netBanking">Net Banking</label>
                </div>
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  name="deliverySlot"
                  component="select"
                  placeholder="Select a Delivery Slot"
                >
                  <option>Select a Delivery Slot</option>
                  <option>Before 10 AM</option>
                  <option>2PM - 6PM</option>
                </Field>
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      />
    );
  }
}

export default NewCustomer;
