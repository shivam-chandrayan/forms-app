import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Country from "./country";
import FillingForm from "./components/fillingForm";
import MainComponents from "./components/mainComponents";
import ValidateComponent from "./components/validateComponent";
import MyForm from "./components/myForm";
import CountrySelect from "./components/countrySelect";
import FurnitureStoreMain from "./components/furnitureStoreMain";

ReactDOM.render(
  <React.StrictMode>
    <FurnitureStoreMain />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
