import React, { Component } from "react";

//Components
import NavBar from "./navbar";
import Products from "./products";

class FurnitureStoreMain extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        {/* <Products /> */}
      </div>
    );
  }
}

export default FurnitureStoreMain;
