import React, { Component } from "react";
import Congrats from "./Congrats/Congrats";
import Guessed from "./Guessed/Guessed";
import Input from "./Input/Input";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

export class JottoUnconnected extends Component {
  componentDidMount() {
    this.props.setSecretWord();
  }

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

const mapDispatchToProps = dispatch => {
  return { setSecretWord: () => dispatch(actions.setSecretWord()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JottoUnconnected);
