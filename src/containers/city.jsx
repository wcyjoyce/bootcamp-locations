import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { activeCity } from "../actions";

class City extends Component {
  handleClick = () => {
    this.props.activeCity(this.props.city);
  }

  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { activeCity: activeCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
