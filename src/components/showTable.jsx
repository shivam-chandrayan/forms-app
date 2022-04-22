import React from "react";

let ShowTable = (props) => {
  return (
    <table className="m-3">
      <thead>
        <tr className="bg-dark text-white">
          <td>Name</td>
          <td>Course</td>
          <td>Year</td>
          <td>Total Marks</td>
          <td>Result</td>
        </tr>
      </thead>
      <tbody>
        {props.details.map((a, i) => (
          <tr key={i}>
            {console.log(a)}
            <td className="border" style={{ width: "200px" }}>
              {a.name}
            </td>
            <td className="border" style={{ width: "200px" }}>
              {a.course}
            </td>
            <td className="border" style={{ width: "200px" }}>
              {a.year}
            </td>
            <td className="border" style={{ width: "200px" }}>
              {a.total}
            </td>
            <td className="border" style={{ width: "200px" }}>
              {a.total === "No Data" ? (
                <button
                  onClick={() => props.enterMarks(i)}
                  className="btn btn-primary"
                >
                  Enter
                </button>
              ) : (
                <button className="btn btn-primary">Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShowTable;
