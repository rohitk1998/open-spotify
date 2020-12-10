import React from "react";
import "./Body.css";
import Search from "./Search";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Body;
