import React, { Component } from "react";

class Products extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                {products.map((a, i) => (
                  <img src={a.img} key={i} style={{ width: "40%" }} />
                ))}
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
