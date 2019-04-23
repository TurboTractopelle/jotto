import React, { Component } from "react";
import Congrats from "./Congrats/Congrats";
import Guessed from "./Guessed/Guessed";
import Input from "./Input/Input";
import { connect } from "react-redux";

class Jotto extends Component {
  render() {
    return (
      <div className="Jotto" data-test="component-jotto">
        <h1>Jotto</h1>
        <Input />
        <Congrats success={this.props.success} />
        <Guessed guessedwords={this.props.guessedwords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    success: state.successreducer,
    guessedwords: state.guessedWordReducer
  };
};

export default connect(mapStateToProps)(Jotto);
