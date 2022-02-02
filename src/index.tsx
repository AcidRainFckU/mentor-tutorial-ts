import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

// import App from './tutorial-5/App';
// import App from "./tutorial-6/App";
// import App from "./tutorial-7/App";
// import App from "./tutorial-8/App";
import App from "./tutorial-9/App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
