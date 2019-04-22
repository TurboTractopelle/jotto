import React from "react";

const Guessed = props => {
  const { guessedwords } = props;
  let guessedWordsDisplay;

  if (guessedwords.length) {
    guessedWordsDisplay = (
      <table dataTest="guessed-words" className="table table-sm">
        <thead className="thead-light">
          <tr>
            <th>words</th>
            <th>letters</th>
          </tr>
        </thead>
        {guessedwords.map((item, i) => (
          <tr dataTest="guessed-word" key={i}>
            <td>{item.guessed}</td>
            <td>{item.letters}</td>
          </tr>
        ))}
      </table>
    );
  } else {
    guessedWordsDisplay = "input stuff";
  }

  return (
    <div className="Guessed" dataTest="component-guessed">
      {guessedWordsDisplay}
    </div>
  );
};

export default Guessed;
