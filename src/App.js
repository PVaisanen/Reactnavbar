import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";

import SearchUser from "./Components/SearchUser";
import Pricing from "./Components/Pricing";

import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
 
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/searchuser" component={SearchUser}>
              <SearchUser />
          </Route>
          <Route path="/pricing" component={Pricing}>
            <Pricing />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
