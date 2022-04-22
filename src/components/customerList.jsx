import React, { Component } from "react";

class CustomerList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.length === 0 ? (
          <div>
            <h3>There are Zero Customers</h3>
          </div>
        ) : (
          <div>
            <table className="table table-sm">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Payments</th>
                  <th>Slot</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {list.map((a, i) => (
                  <tr key={i}>
                    <td>{a.name}</td>
                    <td>{a.type}</td>
                    <td>
                      {a.creditCard ? "Credit-Card " : ""}
                      {a.debitCard ? "Debit-Card " : ""}
                      {a.netBanking ? "Net-Banking" : ""}
                    </td>
                    <td>{a.deliverySlot}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-info"
                        onClick={() => this.props.onEditCustomer(i, a)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default CustomerList;
