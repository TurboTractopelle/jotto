import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    let inputDisplay = !this.props.success ? (
      <form className="form-inline" dataTest="form">
        <input
          dataTest="input"
          className="mb-2 mx-sm-3"
          id="wordGuess"
          type="text"
          placeholder="input word"
        />
        <input
          dataTest="button"
          type="submit"
          value="go"
          className="btn btn-primary mb-2"
        />
      </form>
    ) : null;

    return <div dataTest="component-input">{inputDisplay}</div>;
  }
}

const mapStateToProps = state => {
  return { success: state.successreducer };
};

export default connect(mapStateToProps)(Input);
