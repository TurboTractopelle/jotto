import React, { Component } from "react";
import Congrats from "./Congrats/Congrats";
import Guessed from "./Guessed/Guessed";

class Jotto extends Component {
  render() {
    return (
      <div className="Jotto" dataTest="component-jotto">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <Guessed
          guessedwords={[
            { guessed: "chapi", letters: 3 },
            { guessed: "chapo", letters: 3 }
          ]}
        />
      </div>
    );
  }
}

export default Jotto;
