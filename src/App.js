import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./bootstrap.min.css";

import AddGuest from "./components/add-guest.component";
import GuestWorningList from "./components/guest-worning-list.component";
import GuestDeleteList from "./components/guest-delete-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/add"} className="navbar-brand">
              Check-in
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/guests-worning"} className="navbar-brand">
                Avisos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/guests-delete"} className="navbar-brand">
                Excluir
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/guests-delete" component={GuestDeleteList} />
            <Route exact path="/guests-worning" component={GuestWorningList} />
            <Route exact path={["/","/add"]} component={AddGuest} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
