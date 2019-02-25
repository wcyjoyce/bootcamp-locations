import React, { Component } from "react";

import City from "../containers/city.jsx";

class List extends Component {
  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

export default List;
