import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Saved" component={Saved} />
          <Route component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
