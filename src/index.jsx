import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./context/Context";

ReactDOM.render(
  <>
    <Context>
      <App />
    </Context>
  </>,
  document.getElementById("root")
);
