import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import App from "./components/app";
import "../assets/stylesheets/application.scss";

import citiesReducer from "./reducers/cities_reducer.js";
import activeCityReducer from "./reducers/active_city_reducer.js";

const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer,
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
