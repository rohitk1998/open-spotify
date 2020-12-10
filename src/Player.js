import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import "./Player.css";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

function Player() {
  return (
    <Router>
      <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body />
          {/* body__header */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Player;
