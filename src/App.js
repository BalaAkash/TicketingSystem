import { Router, Route } from "react-router-dom";
import React from "react";

import history from "./history";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Router history={history}>
        <Route exact path="/" component={Login} />
      </Router>
    </div>
  );
}

export default App;
