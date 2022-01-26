import { Router, Route } from "react-router-dom";
import React from "react";

import history from "./history";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";

function App() {
    return (
        <div>
            <Router history={history}>
                <Route exact path="/" component={Login} />
                <NavBar></NavBar>
                <Route exact path="/home" component={Home} />
            </Router>
        </div>
    );
}

export default App;
