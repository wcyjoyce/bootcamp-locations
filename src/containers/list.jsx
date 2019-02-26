import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import City from "../containers/city.jsx";
import { setCities } from "../actions";

class List extends Component {
  componentWillMount() {
    this.props.setCities();
  };

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapReduxStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(List);
