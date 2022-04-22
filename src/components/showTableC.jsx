import React from "react";

let ShowTableC = (props) => {
  return (
    <table className="m-3">
      <thead>
        <tr className="bg-dark text-white">
          <td>Name</td>
          <td>Gender</td>
          <td>Delivery</td>
          <td>Payments</td>
          <td>Country</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {props.details.map((a, i) => (
          <tr key={i}>
            <td className="border" style={{ width: "200px" }}>
              {a.name}
            </td>
            <td className="border" style={{ width: "200px" }}>
              {a.gender}
            </td>
            <td className="border" style={{ width: "200px" }}>
              {a.delivery}
            </td>
            <td className="border" style={{ width: "200px" }}>
              {a.payment}
            </td>
            <td className="border" style={{ width: "200px" }}>
              {a.country}
            </td>
            <td className="border" style={{ width: "200px" }}>
              <button className="btn btn-primary">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShowTableC;
