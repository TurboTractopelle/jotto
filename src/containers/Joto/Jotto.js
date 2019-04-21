import React, { Component } from "react";
import Congrats from "./Congrats/Congrats";
import Guessed from "./Guessed/Guessed";

class Jotto extends Component {
  render() {
    return (
      <div className="Jotto" dataTest="component-jotto">
        <Congrats success={false} />
        <Guessed />
      </div>
    );
  }
}

export default Jotto;
