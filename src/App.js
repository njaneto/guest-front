import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddGuest from "./components/add-guest.component";
import GuestMorningList from "./components/guest-morning-list.component";
import GuestAfternoonList from "./components/guest-afternoon-list.component";
import GuestNigthList from "./components/guest-nigth-list.component";

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
              <Link to={"/guests-morning"} className="navbar-brand">
                Manhã
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/guests-afternoon"} className="navbar-brand">
                Tarde
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/guests-nigth"} className="navbar-brand">
                Noite
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/guests-morning" component={GuestMorningList} />
            <Route exact path="/guests-afternoon" component={GuestAfternoonList} />
            <Route exact path="/guests-nigth" component={GuestNigthList} />
            <Route exact path={["/","/add"]} component={AddGuest} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
