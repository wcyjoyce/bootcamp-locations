import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ActiveCity extends Component {
  render() {
    if (this.props.activeCity) {
      return (
        <div className="active-city">
          <h3>{this.props.activeCity.name}</h3>
          <p>{this.props.activeCity.address}</p>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} />
        </div>
      );
    } else {
      return (
        <div className="active-city">
          <p>Select a City</p>
        </div>
      );
    }
  }
}

// destructuring
// class ActiveCity extends Component {
//   render() {
//     const { activeCity } = this.props;
//     if ( activeCity ) {
//       return (
//         <div className="active-city">
//           <h3>{activeCity.name}</h3>
//           <p>{activeCity.address}</p>
//           <img src={`https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`} />
//         </div>
//       );
//     } else {
//       return (
//         <div className="active-city">
//           <p>Select a City</p>
//         </div>
//       );
//     }
//   }
// }

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

export default connect(mapStateToProps)(ActiveCity);
