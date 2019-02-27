import React, { Component } from "react";

import List from "../containers/list.jsx";
import ActiveCity from "../containers/active_city.jsx";

const NavBar = () => {
  return (
    <div className="navbar">
    <img src={`https://raw.githubusercontent.com/lewagon/www-images/master/logo-square.png`} />
    <div className="text">
      <h1>Le Wagon</h1>
      <p>Change your life, learn to <span>code</span>.</p>
    </div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="app">
        <List />
        <ActiveCity />
      </div>
    </div>
  );
};

export default App;
