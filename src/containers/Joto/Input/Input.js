import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    return <div dataTest="component-input">It works!</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Input);
