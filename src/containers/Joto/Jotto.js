import React, { Component } from "react";
import Congrats from "./Congrats/Congrats";
import Guessed from "./Guessed/Guessed";
import Input from "./Input/Input";

class Jotto extends Component {
  render() {
    return (
      <div className="Jotto" data-test="component-jotto">
        <h1>Jotto</h1>
        <Input />
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
