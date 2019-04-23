import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/actions";

class Input extends Component {
  state = {
    value: ""
  };

  onSubmitHandler = word => e => {
    e.preventDefault();
    this.props.guessedWord(this.state.value);
    this.setState({ value: "" });
  };

  onChangeInputHandler = () => e => {
    const value = e.target.value;
    this.setState({ value });
  };

  render() {
    let inputDisplay = !this.props.success ? (
      <form
        className="form-inline"
        data-test="form"
        onSubmit={this.onSubmitHandler("train")}
      >
        <input
          data-test="input"
          className="mb-2 mx-sm-3"
          id="wordGuess"
          type="text"
          placeholder="input word"
          value={this.state.value}
          onChange={this.onChangeInputHandler()}
        />
        <input
          data-test="button"
          type="submit"
          value="go"
          className="btn btn-primary mb-2"
        />
      </form>
    ) : null;

    return <div data-test="component-input">{inputDisplay}</div>;
  }
}

const mapStateToProps = state => {
  return { success: state.successreducer };
};

const mapDispatchToProps = dispatch => {
  return {
    guessedWord: word => dispatch(actions.guessWordStart(word))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
