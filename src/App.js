import "./App.css";
//import "./main.css";
import React, { Fragment, useEffect } from "react";
import Landing from "./components/layout/Landing";
import TablePage from "./components/layout/TablePage";
import Routes from "./components/routing/Routes";

import Sidebar from "./components/layout/sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/tables" component={TablePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
