import React, { Component } from "react";
import "./App.css";
import Counter from "./containers/Counter/Counter";
import Jotto from "./containers/Joto/Jotto";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Counter title="Counter" />
          <Jotto />
        </div>
      </div>
    );
  }
}

export default App;
