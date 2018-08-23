import React, { Component } from "react";
import SearchBar from "../containers/searchBar";
import ForecastList from "../containers/forecastList";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ForecastList />
      </div>
    );
  }
}
