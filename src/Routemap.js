import { HashRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import SideBar from "./Components/SideBar";
// import DashboardDrawer from "./Components/DashboardDrawer";

export default class Routemap extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <SideBar></SideBar>
          <Switch>
            <Route exact path="/" component={SideBar} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
